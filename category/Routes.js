const CategoriesController = require('./api/CategoriesController');

const addCategoryRoutes  = ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets/:bucketID/categories', async (request, reply) => {
        CategoriesController({commandBus, queryBus}).getAll()
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });

    fastify.get('/buckets/:bucketID/categories/:id', async (request, reply) => {
        CategoriesController({commandBus, queryBus}).get(request.params.id)
            .then((message) => reply.code(200).send(message))
            .catch((err) => reply.code(404).send(err));
    });
};

module.exports = addCategoryRoutes;