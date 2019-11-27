const BucketsController = (repository) => {
    /*
        Bucket Model
            id: string -- Uuid format
            name: string -- Label
            created_at: data -- Created bucket
            closed_at: data -- Closed bucket
     */
    return {
        async get(id) {
            return repository.get(id);
        },
        async getAll() {
            return repository.getAll();
        },
        async create(bucket) {
            return repository.create(bucket);
        },
        async update(bucket) {
            return repository.update(bucket);
        },
        async delete(bucketID) {
            return repository.delete(bucketID);
        },
    };
};
module.exports = BucketsController;