const CreateBucketCommand = require('../application/CreateBucketCommand');
const UpdateBucketCommand = require('../application/UpdateBucketCommand');

const GetBucketQuery = require('../infrastructure/GetBucketQuery');
const GetAllBucketsQuery = require('../infrastructure/GetAllBucketsQuery');

const BucketsController = ({commandBus, queryBus}) => {
    /*
        Bucket Model
            id: string -- Uuid format
            name: string -- Label
            created_at: data -- Created bucket
            closed_at: data -- Closed bucket
     */
    return {
        async get(id) {
            const query = new GetBucketQuery();
            id.__proto__.constructor = GetBucketQuery.prototype.constructor;
            return queryBus.send(query);
        },
        async getAll() {
            const query = new GetAllBucketsQuery();
            return queryBus.send(query);
        },
        async create(bucket) {
            bucket.__proto__.constructor = CreateBucketCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async update(bucket) {
            bucket.__proto__.constructor = UpdateBucketCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async shared(bucketID, userID) {
            bucket.__proto__.constructor = CreateBucketCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async delete(bucketID) {
            commandBus.send(bucketID);
        },
    };
};
module.exports = BucketsController;