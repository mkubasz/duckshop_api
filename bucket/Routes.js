const BucketsController = require('./api/BucketsController');

const addBucketRoutes = async ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets', async (request, reply) => {
        BucketsController({commandBus, queryBus}).getAll()
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
    fastify.post('/buckets', async (request, reply) => {
        BucketsController({commandBus, queryBus}).create(request.body)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
    fastify.put('/buckets', async (request, reply) => {
        BucketsController({commandBus, queryBus}).getAll()
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
    fastify.delete('/buckets', async (request, reply) => {
        BucketsController({commandBus, queryBus}).getAll()
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
    fastify.get('/buckets/:id', async (request, reply) => {
        BucketsController({commandBus, queryBus}).get(request.params.id)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
    fastify.get('/buckets/:id/close', async (request, reply) => {
        BucketsController({commandBus, queryBus}).get(request.params.id)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
    fastify.get('/buckets/:id/share', async (request, reply) => {
        BucketsController({commandBus, queryBus}).get(request.params.id)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
};

module.exports = addBucketRoutes;