const GetBucketQuery = require('../bucket/infrastructure/GetBucketQuery');
const BucketQueryHandler = require('../bucket/infrastructure/BucketQueryHandler');

const QueryBus = (dataProvider) => {
    const queryRegister = [
        {query: GetBucketQuery, handler: BucketQueryHandler(dataProvider.buckets)}
    ];
    return {
        handle(query) {
            const handler = queryRegister.find(
                (item) =>
                    query.constructor.name === item.query.name
            );
            return handler.handler.handle(query);
        }
    };
};

module.exports = QueryBus;