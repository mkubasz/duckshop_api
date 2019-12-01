const ProductsRepository = require('./ProductsRepository');
const GetProductQuery = require('./GetProductQuery');
const GetAllProductsQuery = require('./GetAllProductsQuery');

const ProductQueryHandler = (dataProvider) => {
    return {
        async handle(query) {
            if (query instanceof GetProductQuery) {
                return ProductsRepository(dataProvider).get(query.id);
            }
            if (query instanceof GetAllProductsQuery) {
                return ProductsRepository(dataProvider).getAll();
            }
        }
    };
};

module.exports = ProductQueryHandler;