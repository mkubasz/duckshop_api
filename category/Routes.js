const CategoriesController = require('./api/CategoriesController');

const addCategoryRoutes  = ({fastify, commandBus, queryBus}) => {
    /// Buckets Endpoints
    fastify.get('/buckets/:bucketID/Categorys', async (request, reply) => {
        const message = await CategoriesController({commandBus, queryBus}).getAll();
        reply.send(message);
    });

    fastify.get('/buckets/:bucketID/Categorys/:id', async (request, reply) => {
        const message = await CategoriesController({commandBus, queryBus}).get(request.params.id);
        reply.send(message);
    });
};

module.exports = addCategoryRoutes;