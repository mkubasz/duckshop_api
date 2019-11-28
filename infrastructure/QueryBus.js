const BucketQueryHandler = require('../bucket/infrastructure/BucketQueryHandler');
const GetBucketQuery = require('../bucket/infrastructure/GetBucketQuery');
const GetAllBucketsQuery = require('../bucket/infrastructure/GetAllBucketsQuery');

const QueryBus = (dataProvider) => {
    const queryRegister = [
        {query: GetBucketQuery, handler: BucketQueryHandler(dataProvider.buckets)},
        {query: GetAllBucketsQuery, handler: BucketQueryHandler(dataProvider.buckets)}

    ];
    return {
        async send(query) {
            const handler = queryRegister.find(
                (item) =>
                    query.constructor.name === item.query.name
            );
            return await handler.handler.handle(query);
        }
    };
};

module.exports = QueryBus;