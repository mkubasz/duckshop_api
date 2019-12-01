const BucketsRepository = require('../infrastructure/BucketsRepository');
const CreateBucketCommand = require('./CreateBucketCommand');
const UpdateBucketCommand = require('./UpdateBucketCommand');
const DeleteBucketCommand = require('./DeleteBucketCommand');

const BucketCommandHandler = (dataProvider) => {
    return {
      async handle(command) {
        if (command instanceof CreateBucketCommand) {
            BucketsRepository(dataProvider).create(command);
        }
      if (command instanceof DeleteBucketCommand) {
          BucketsRepository(dataProvider).delete(command);
      }
          if (command instanceof UpdateBucketCommand) {
              BucketsRepository(dataProvider).update(command);
          }
      }
    };
};

module.exports = BucketCommandHandler;