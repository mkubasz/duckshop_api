const fastify = require('fastify')({
    logger: true
});

const fs = require('fs');
const config = require('./Config');

const CommandBus = require('./application/CommandBus');
const QueryBus = require('./infrastructure/QueryBus');

const inMemoryDataProvider = require('./infrastructure/InMemoryDataProvider')();

const commandHandlers = require('./application/Registration')();
const queryHandlers = require('./application/Registration')();

const BucketRegistration = require('./bucket/Registration');
commandHandlers.registration(BucketRegistration(inMemoryDataProvider).commandsRegister);
queryHandlers.registration(BucketRegistration(inMemoryDataProvider).queryRegister);

const ProductRegistration = require('./product/Registration');
commandHandlers.registration(ProductRegistration(inMemoryDataProvider).commandsRegister);
queryHandlers.registration(ProductRegistration(inMemoryDataProvider).queryRegister);

const commandBus = CommandBus(commandHandlers.handlers());
const queryBus = QueryBus(queryHandlers.handlers());

fastify.get('/', (request, reply) => {
    const endpoints = fs.readFileSync('endpoints.json');
    reply.send(JSON.parse(endpoints));
});

const addBucketRoutes = require('./bucket/Routes');
addBucketRoutes({fastify, commandBus, queryBus});

const addProductRoutes = require('./product/Routes');
addProductRoutes({fastify, commandBus, queryBus});

fastify.listen(config.port, (err, address) => {
    fastify.log.info(`server listening on ${address}`);
});