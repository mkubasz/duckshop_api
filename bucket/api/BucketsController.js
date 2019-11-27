const CreateBucketCommand = require('../application/CreateBucketCommand');
const GetBucketQuery = require('../infrastructure/GetBucketQuery');
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
            return queryBus.handle(query);
        },
        async getAll() {
            return repository.getAll();
        },
        async create(bucket: CreateBucketCommand) {
            commandBus.handle(bucket);
        },
        async update(bucket: CreateBucketCommand) {
            commandBus.handle(bucket);
        },
        async delete(bucketID) {
            commandBus.handle(bucketID);
        },
    };
};
module.exports = BucketsController;