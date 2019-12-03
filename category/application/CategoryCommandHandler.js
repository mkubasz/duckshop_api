const AddCategoryCommand = require('./AddCategoryCommand');
const BucketsRepository = require('../infrastructure/CategoriesRepository');

const CategoryCommandHandler = (dataProvider) => {
    return {
      async handle(command) {
        if (command instanceof AddCategoryCommand) {
            BucketsRepository(dataProvider).create(command);
        }
      }
    };
};

module.exports = CategoryCommandHandler;