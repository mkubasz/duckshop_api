const AddCategoryCommand = require('./application/AddCategoryCommand');
const CategoryCommandHandler = require('./application/CategoryCommandHandler');
const CategoryQueryHandler = require('./infrastructure/CategoryQueryHandler');
const GetCategoryQuery = require('./infrastructure/GetCategoryQuery');
const GetAllCategorysQuery = require('./infrastructure/GetAllCategorysQuery');


const CategoryRegistration = (dataProvider) => {
    return {
        commandsRegister: [
            {command: AddCategoryCommand, handler: CategoryCommandHandler(dataProvider.buckets)}
        ],
        queryRegister: [
            {query: GetCategoryQuery, handler: CategoryQueryHandler(dataProvider.buckets)},
            {query: GetAllCategorysQuery, handler: CategoryQueryHandler(dataProvider.buckets)}

        ],
    };
};

module.exports = CategoryRegistration;
