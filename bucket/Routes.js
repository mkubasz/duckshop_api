const BucketsController = require('./api/BucketsController');

const addBucketRoutes  = async ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).getAll();
        reply.send(message);
    });
    fastify.post('/buckets', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).create(request.body);
        reply.send(message);
    });
    fastify.put('/buckets', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).getAll();
        reply.send(message);
    });
    fastify.delete('/buckets', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).getAll();
        reply.send(message);
    });
    fastify.get('/buckets/:id', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).get(request.params.id);
        reply.send(message);
    });
    fastify.get('/buckets/:id/close', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).get(request.params.id);
        reply.send(message);
    });
    fastify.get('/buckets/:id/share', async (request, reply) => {
        const message = await BucketsController({commandBus, queryBus}).get(request.params.id);
        reply.send(message);
    });
};

module.exports = addBucketRoutes;