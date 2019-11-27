const _ = require('lodash');
const BucketsRepository = () => {
    let bucketsMock = [
        {
            id: "generatedID1",
            name: "Default1",
            created_at: "data",
            closed_at: "data"
        },
        {
            id: "generatedID2",
            name: "Default2",
            created_at: "data",
            closed_at: "data"
        }
    ];
    return {
        get(id) {
            return bucketsMock.find((el) => el.id === id);
        },
        getAll() {
            return bucketsMock;
        },
        create(bucket) {
            return bucketsMock.push(bucket);
        },
        update(bucketNew) {
            let bucket = bucketsMock.find(el => el.id === bucketNew.id);
            bucket.name = bucketNew.name;
            bucket.closed_at = bucketNew.closed_at;
            bucket.created_at = bucketNew.created_at;
            return bucket;
        },
        delete(bucketID) {
            return _.remove(bucketsMock, el => el.id === bucketID);
        },
    };
};

module.exports = BucketsRepository;