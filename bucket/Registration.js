const CreateBucketCreate = require('./application/CreateBucketCommand');
const BucketCommandHandler = require('./application/BucketCommandHandler');
const BucketQueryHandler = require('../bucket/infrastructure/BucketQueryHandler');
const GetBucketQuery = require('../bucket/infrastructure/GetBucketQuery');
const GetAllBucketsQuery = require('../bucket/infrastructure/GetAllBucketsQuery');


const BucketRegistration = (dataProvider) => {
    return {
        commandsRegister: [
            {command: CreateBucketCreate, handler: BucketCommandHandler(dataProvider.buckets)}
        ],
        queryRegister: [
            {query: GetBucketQuery, handler: BucketQueryHandler(dataProvider.buckets)},
            {query: GetAllBucketsQuery, handler: BucketQueryHandler(dataProvider.buckets)}

        ],
    };
};

module.exports = BucketRegistration;
