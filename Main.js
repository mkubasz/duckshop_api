const fastify = require('fastify')({
    logger: true
});

const fs = require('fs');
const config = require('./Config');

const CommandBus = require('./application/CommandBus');
const QueryBus = require('./infrastructure/QueryBus');

const InMemoryDataProvider = require('./infrastructure/InMemoryDataProvider')();

const addBucketRoutes = require('./bucket/Routes');
const BucketRegistration = require('./bucket/Registration');

const commandHandlers = require('./application/Registration')();
const queryHandlers = require('./application/Registration')();

commandHandlers.registration(BucketRegistration(InMemoryDataProvider).commandsRegister);
queryHandlers.registration(BucketRegistration(InMemoryDataProvider).queryRegister);

const commandBus = CommandBus(commandHandlers.handlers());
const queryBus = QueryBus(queryHandlers.handlers());

fastify.get('/', (request, reply) => {
    const endpoints = fs.readFileSync('endpoints.json');
    reply.send(JSON.parse(endpoints));
});

addBucketRoutes({fastify, commandBus, queryBus});

fastify.listen(config.port, (err, address) => {
    fastify.log.info(`server listening on ${address}`);
});