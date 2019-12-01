const BucketCommandHandler = require('./application/BucketCommandHandler');
const BucketQueryHandler = require('../bucket/infrastructure/BucketQueryHandler');

const CreateBucketCommand = require('./application/CreateBucketCommand');
const UpdateBucketCommand = require('./application/UpdateBucketCommand');
const DeleteBucketCommand = require('./application/DeleteBucketCommand');

const GetBucketQuery = require('./infrastructure/GetBucketQuery');
const GetAllBucketsQuery = require('./infrastructure/GetAllBucketsQuery');


const BucketRegistration = (dataProvider) => {
    return {
        commandsRegister: [
            {command: CreateBucketCommand, handler: BucketCommandHandler(dataProvider.buckets)},
            {command: UpdateBucketCommand, handler: BucketCommandHandler(dataProvider.buckets)},
            {command: DeleteBucketCommand, handler: BucketCommandHandler(dataProvider.buckets)}
        ],
        queryRegister: [
            {query: GetBucketQuery, handler: BucketQueryHandler(dataProvider.buckets)},
            {query: GetAllBucketsQuery, handler: BucketQueryHandler(dataProvider.buckets)}

        ],
    };
};

module.exports = BucketRegistration;
