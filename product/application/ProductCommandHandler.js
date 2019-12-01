const AddProductCommand = require('./AddProductCommand');
const BucketsRepository = require('../infrastructure/ProductsRepository');

const ProductCommandHandler = (dataProvider) => {
    return {
      async handle(command) {
        if (command instanceof AddProductCommand) {
            BucketsRepository(dataProvider).create(command);
        }
      }
    };
};

module.exports = ProductCommandHandler;