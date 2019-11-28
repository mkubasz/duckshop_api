const fastify = require('fastify')({
    logger: true
});

const fs = require('fs');
const config = require('./Config');

const BucketsController = require('./bucket/api/BucketsController');
const CommandBus = require('./application/CommandBus');
const QueryBus = require('./infrastructure/QueryBus');
const InMemoryDataProvider = require('./infrastructure/InMemoryDataProvider')();

const commandBus = CommandBus(InMemoryDataProvider);
const queryBus = QueryBus(InMemoryDataProvider);

fastify.get('/', (request, reply) => {
    const endpoints = fs.readFileSync('endpoints.json');
    reply.send(JSON.parse(endpoints));
});

/// Buckets Endpoints
fastify.get('/buckets', async (request, reply) => {
    const message = await BucketsController({commandBus, queryBus}).getAll();
    reply.send(message);
});

fastify.get('/buckets/:id', async (request, reply) => {
    const message = await BucketsController({commandBus, queryBus}).get(request.params.id);
    reply.send(message);
});

fastify.listen(config.port, (err, address) => {
    fastify.log.info(`server listening on ${address}`);
});