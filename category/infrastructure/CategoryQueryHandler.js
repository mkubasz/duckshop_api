const CategoriesRepository = require('./CategoriesRepository');
const GetCategoryQuery = require('./GetCategoryQuery');
const GetAllCategoriesQuery = require('./GetAllCategoriesQuery');

const CategoryQueryHandler = (dataProvider) => {
    return {
        async handle(query) {
            if (query instanceof GetCategoryQuery) {
                return CategoriesRepository(dataProvider).get(query.id);
            }
            if (query instanceof GetAllCategoriesQuery) {
                return CategoriesRepository(dataProvider).getAll();
            }
        }
    };
};

module.exports = CategoryQueryHandler;