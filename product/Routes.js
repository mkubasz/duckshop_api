const ProductsController = require('./api/ProductsController');

const addProductRoutes  = ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets/:bucketID/products', async (request, reply) => {
        const message = await ProductsController({commandBus, queryBus}).getAll();
        reply.send(message);
    });

    fastify.get('/buckets/:bucketID/products/:id', async (request, reply) => {
        const message = await ProductsController({commandBus, queryBus}).get(request.params.id);
        reply.send(message);
    });
};

module.exports = addProductRoutes;