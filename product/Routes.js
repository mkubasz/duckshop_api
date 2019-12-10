const ProductsController = require('./api/ProductsController');

const addProductRoutes  = ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets/:bucketID/products', async (request, reply) => {
        ProductsController({commandBus, queryBus}).getAll()
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });

    fastify.get('/buckets/:bucketID/products/:id', async (request, reply) => {
        ProductsController({commandBus, queryBus}).get(request.params.id)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
};

module.exports = addProductRoutes;