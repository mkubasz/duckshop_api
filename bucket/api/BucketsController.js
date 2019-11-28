const CreateBucketCommand = require('../application/CreateBucketCommand');
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
            Object.assign(query, {id: id});
            return queryBus.send(query);
        },
        async getAll() {
            const query = new GetAllBucketsQuery();
            return queryBus.send(query);
        },
        async create(bucket) {
            const command = new CreateBucketCommand();
            Object.assign(command, bucket);
            commandBus.send(command);
        },
        async update(bucket) {
            const command = new CreateBucketCommand();
            Object.assign(command, bucket);
            commandBus.send(command);
        },
        async delete(bucketID) {
            commandBus.send(bucketID);
        },
    };
};
module.exports = BucketsController;