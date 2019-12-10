const ClientsController = require('./api/ClientsController');

const addClientRoutes  = ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets/:bucketID/Clients', async (request, reply) => {
        ClientsController({commandBus, queryBus}).getAll()
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });

    fastify.get('/buckets/:bucketID/Clients/:id', async (request, reply) => {
        ClientsController({commandBus, queryBus}).get(request.params.id)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
};

module.exports = addClientRoutes;