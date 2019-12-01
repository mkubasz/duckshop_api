const ClientsController = require('./api/ClientsController');

const addClientRoutes  = ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets/:bucketID/Clients', async (request, reply) => {
        const message = await ClientsController({commandBus, queryBus}).getAll();
        reply.send(message);
    });

    fastify.get('/buckets/:bucketID/Clients/:id', async (request, reply) => {
        const message = await ClientsController({commandBus, queryBus}).get(request.params.id);
        reply.send(message);
    });
};

module.exports = addClientRoutes;