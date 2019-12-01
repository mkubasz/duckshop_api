const AddProductCommand = require('../application/AddProductCommand');
const GetProductQuery = require('../infrastructure/GetProductQuery');
const GetAllProductsQuery = require('../infrastructure/GetAllProductsQuery');

const ProductsController = ({commandBus, queryBus}) => {
    /*
        Bucket Model
            id: string -- Uuid format
            name: string -- Label
            created_at: data -- Created bucket
            closed_at: data -- Closed bucket
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