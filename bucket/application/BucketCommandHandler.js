const BucketsRepository = require('../infrastructure/BucketsRepository');
const CreateBucketCommand = require('./CreateBucketCommand');
const UpdateBucketCommand = require('./UpdateBucketCommand');
const DeleteBucketCommand = require('./DeleteBucketCommand');
const ChangeStateBucketCommand = require('./ChangeStateBucketCommand');

const BucketCommandHandler = (dataProvider) => {
    return {
        async handle(command) {
            if (command instanceof CreateBucketCommand) {
                await BucketsRepository(dataProvider).create(command);
            } else if (command instanceof DeleteBucketCommand) {
                BucketsRepository(dataProvider).delete(command);
            } else if (command instanceof UpdateBucketCommand) {
                BucketsRepository(dataProvider).update(command);
            } else if (command instanceof ChangeStateBucketCommand) {
                BucketsRepository(dataProvider).change(command);
            }
        }
    };
};

module.exports = BucketCommandHandler;