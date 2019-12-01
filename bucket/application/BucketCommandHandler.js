const CreateBucketCommand = require('./CreateBucketCommand');
const BucketsRepository = require('../infrastructure/BucketsRepository');

const BucketCommandHandler = (dataProvider) => {
    return {
      async handle(command) {
        if (command instanceof CreateBucketCommand) {
            BucketsRepository(dataProvider).create(command);
        }
      }
    };
};

module.exports = BucketCommandHandler;