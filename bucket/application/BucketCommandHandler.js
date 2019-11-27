const CreateBucketCreate = require('./CreateBucketCommand');
const BucketsRepository = require('../infrastructure/BucketsRepository');

const BucketCommandHandler = (dataProvider) => {
    return {
      handle(command) {
        if (command instanceof CreateBucketCreate) {
            BucketsRepository(dataProvider).create(command);
        }
      }
    };
};

module.exports = BucketCommandHandler;