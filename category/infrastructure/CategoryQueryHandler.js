const CategorysRepository = require('./CategorysRepository');
const GetCategoryQuery = require('./GetCategoryQuery');
const GetAllCategorysQuery = require('./GetAllCategorysQuery');

const CategoryQueryHandler = (dataProvider) => {
    return {
        async handle(query) {
            if (query instanceof GetCategoryQuery) {
                return CategorysRepository(dataProvider).get(query.id);
            }
            if (query instanceof GetAllCategorysQuery) {
                return CategorysRepository(dataProvider).getAll();
            }
        }
    };
};

module.exports = CategoryQueryHandler;