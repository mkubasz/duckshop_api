const BucketsRepository = require('../infrastructure/BucketsRepository');
const GetBucketQuery = require('./GetBucketQuery');
const GetAllBucketsQuery = require('./GetAllBucketsQuery');

const BucketQueryHandler = (dataProvider) => {
    return {
        async handle(query) {
            if (query instanceof GetBucketQuery) {
                return BucketsRepository(dataProvider).get(query.id);
            }
            else if (query instanceof GetAllBucketsQuery) {
                return BucketsRepository(dataProvider).getAll();
            }
            else if (query instanceof GetAllBucketsQuery) {
                return BucketsRepository(dataProvider).getAll();
            }
        }
    };
};

module.exports = BucketQueryHandler;