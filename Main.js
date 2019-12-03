const fastify = require('fastify')({
    logger: true
});

const fs = require('fs');
const config = require('./Config');

const CommandBus = require('./application/CommandBus');
const QueryBus = require('./infrastructure/QueryBus');

const dataProvider = require('./infrastructure/MongoDataProvider');

const commandHandlers = require('./application/Registration')();
const queryHandlers = require('./application/Registration')();

const BucketRegistration = require('./bucket/Registration');

commandHandlers.registration(BucketRegistration(dataProvider).commandsRegister);
queryHandlers.registration(BucketRegistration(dataProvider).queryRegister);

const ProductRegistration = require('./product/Registration');
commandHandlers.registration(ProductRegistration(dataProvider).commandsRegister);
queryHandlers.registration(ProductRegistration(dataProvider).queryRegister);

const CategoryRegistration = require('./category/Registration');
commandHandlers.registration(CategoryRegistration(dataProvider).commandsRegister);
queryHandlers.registration(CategoryRegistration(dataProvider).queryRegister);

const ClientRegistration = require('./client/Registration');
commandHandlers.registration(ClientRegistration(dataProvider).commandsRegister);
queryHandlers.registration(ClientRegistration(dataProvider).queryRegister);

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

const addCategoryRoutes = require('./category/Routes');
addCategoryRoutes({fastify, commandBus, queryBus});

const addClientRoutes = require('./client/Routes');
addClientRoutes({fastify, commandBus, queryBus});

fastify.listen(config.port, (err, address) => {
    fastify.log.info(`server listening on ${address}`);
});