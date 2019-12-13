const _ = require('lodash');
const bucketSchema = require('./Bucket');
const BucketsRepository = (dataProvider) => {
    return {
        async get(id) {
            if(process.env.TEST === "true") {
                return dataProvider.find((el) => el.id === id);
            }

            let connection = await dataProvider();
            let Bucket = await connection.connect('Bucket', bucketSchema);
            return await Bucket.findOne({bucketID: id}).lean().exec();
        },
        async getAll() {
            if(process.env.TEST === "true") {
                return dataProvider;
            }
            let connection = await dataProvider();
            let Bucket = await connection.connect('Bucket', bucketSchema);
            return await Bucket.find({}).lean().exec();
        },
        async create(bucket) {
            if(process.env.TEST === "true") {
                return dataProvider.push(bucket);
            }

            let connection = await dataProvider();
            let Bucket = await connection.connect('Bucket', bucketSchema);
            let newBucket = new Bucket({
                bucketID: bucket.id,
                name: bucket.name
            });
            newBucket.save(err => {
                if (err) console.log("Don't create Bucket");
                console.log("Create Bucket");
            });
            return newBucket;
        },
        update(bucketNew) {
            if(process.env.TEST === "true") {
                let bucket = dataProvider.find(el => el.id === bucketNew.id);
                bucket.name = bucketNew.name;
                bucket.closed_at = bucketNew.closed_at;
                bucket.created_at = bucketNew.created_at;
                return bucket;
            }

        },
        delete(bucketID) {
            if(process.env.TEST === "true") {
                return _.remove(dataProvider, el => el.id === bucketID.id);
            }
        },
        change(bucketID) {
            if(process.env.TEST === "true") {
                let bucket = dataProvider.find(el => el.id === bucketID.id);
                if (bucket["closed_at"] === null) {
                    bucket["closed_at"] = new Date(Date.now());
                } else {
                    bucket["closed_at"] = null;
                }
                return bucket;
            }
        },
    };
};

module.exports = BucketsRepository;