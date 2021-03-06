const AddProductCommand = require('../application/AddProductCommand');
const GetProductQuery = require('../infrastructure/GetProductQuery');
const GetAllProductsQuery = require('../infrastructure/GetAllProductsQuery');

const ProductsController = ({commandBus, queryBus}) => {
    /*
        Product Model
            id: string -- Uuid format
            name: string -- Label
            description: string -- Created bucket
            image: data -- Closed bucket
            category: string -- Closed bucket
            number: int -- Closed bucket
            bought: int -- Closed bucket
            bucketID: int
     */
    return {
        async get(id) {
            id.__proto__.constructor = GetProductQuery.prototype.constructor;
            return queryBus.send(id);
        },
        async getAll() {
            const query = new GetAllProductsQuery();
            return queryBus.send(query);
        },
        async add(bucket) {
            bucket.__proto__.constructor = AddProductCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async save(bucket) {
            bucket.__proto__.constructor = AddProductCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async buy(bucketID) {
            bucket.__proto__.constructor = AddProductCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async delete(bucketID) {
            commandBus.send(bucketID);
        },
    };
};
module.exports = ProductsController;