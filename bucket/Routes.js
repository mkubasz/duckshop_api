const BucketsController = require('./api/BucketsController');

const BucketRoutes = ({fastify, commandBus, queryBus}) => {
return {
  add() {
      /// Buckets Endpoints
      fastify.get('/buckets', async (request, reply) => {
          const message = await BucketsController({commandBus, queryBus}).getAll();
          reply.send(message);
      });

      fastify.get('/buckets/:id', async (request, reply) => {
          const message = await BucketsController({commandBus, queryBus}).get(request.params.id);
          reply.send(message);
      });
  }
};
};

module.exports = BucketRoutes;