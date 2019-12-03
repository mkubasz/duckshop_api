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
            {command: CreateBucketCommand, handler: BucketCommandHandler(dataProvider)},
            {command: UpdateBucketCommand, handler: BucketCommandHandler(dataProvider)},
            {command: DeleteBucketCommand, handler: BucketCommandHandler(dataProvider)}
        ],
        queryRegister: [
            {query: GetBucketQuery, handler: BucketQueryHandler(dataProvider)},
            {query: GetAllBucketsQuery, handler: BucketQueryHandler(dataProvider)}

        ],
    };
};

module.exports = BucketRegistration;
