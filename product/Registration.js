const AddProductCommand = require('./application/AddProductCommand');
const ProductCommandHandler = require('./application/ProductCommandHandler');
const ProductQueryHandler = require('./infrastructure/ProductQueryHandler');
const GetProductQuery = require('./infrastructure/GetProductQuery');
const GetAllProductsQuery = require('./infrastructure/GetAllProductsQuery');


const ProductRegistration = (dataProvider) => {
    return {
        commandsRegister: [
            {command: AddProductCommand, handler: ProductCommandHandler(dataProvider.buckets)}
        ],
        queryRegister: [
            {query: GetProductQuery, handler: ProductQueryHandler(dataProvider.buckets)},
            {query: GetAllProductsQuery, handler: ProductQueryHandler(dataProvider.buckets)}

        ],
    };
};

module.exports = ProductRegistration;
