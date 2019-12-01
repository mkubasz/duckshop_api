const _ = require('lodash');
const BucketsRepository = (dataProvider) => {
    return {
        get(id) {
            return dataProvider.find((el) => el.id === id);
        },
        getAll() {
            return dataProvider;
        },
        create(bucket) {
            return dataProvider.push(bucket);
        },
        update(bucketNew) {
            let bucket = dataProvider.find(el => el.id === bucketNew.id);
            bucket.name = bucketNew.name;
            bucket.closed_at = bucketNew.closed_at;
            bucket.created_at = bucketNew.created_at;
            return bucket;
        },
        delete(bucketID) {
            return _.remove(dataProvider, el => el.id === bucketID.id);
        },
    };
};

module.exports = BucketsRepository;