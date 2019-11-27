const GetBucketQuery = require('./GetBucketQuery');
const BucketsRepository = require('../infrastructure/BucketsRepository');

const BucketQueryHandler = (dataProvider) => {
    return {
        handle(query) {
            if (query instanceof GetBucketQuery) {
                return BucketsRepository(dataProvider).get(query.id);
            }
        }
    };
};

module.exports = BucketQueryHandler;