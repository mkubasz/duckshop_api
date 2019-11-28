const fastify = require('fastify')({
    logger: true
});

const config = require('./Config');
const BucketsController = require('./bucket/api/BucketsController');
const CommandBus = require('./application/CommandBus');
const QueryBus = require('./infrastructure/QueryBus');
const fs = require('fs');

const InMemoryDataProvider = require('./infrastructure/InMemoryDataProvider')();

fastify.get('/', (request, reply) => {
    const endpoints = fs.readFileSync('endpoints.json');
    reply.send(JSON.parse(endpoints));
});

const commandBus = CommandBus(InMemoryDataProvider);
const queryBus = QueryBus(InMemoryDataProvider);

/// Buckets Endpoints
fastify.get('/bucket', async (request, reply) => {
    const message = await BucketsController({commandBus, queryBus}).getAll();
    reply.send(message);
});

fastify.get('/bucket/:id', async (request, reply) => {
    const message = await BucketsController({commandBus, queryBus}).get(req.params.id);
    reply.send(message);
});

fastify.listen(config.port, (err, address) => {
    fastify.log.info(`server listening on ${address}`);
});