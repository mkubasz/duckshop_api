const AddCategoryCommand = require('../application/AddCategoryCommand');
const GetCategoryQuery = require('../infrastructure/GetCategoryQuery');
const GetAllCategorysQuery = require('../infrastructure/GetAllCategorysQuery');

const CategorysController = ({commandBus, queryBus}) => {
    /*
        Category Model
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
            id.__proto__.constructor = GetCategoryQuery.prototype.constructor;
            return queryBus.send(id);
        },
        async getAll() {
            const query = new GetAllCategorysQuery();
            return queryBus.send(query);
        },
        async add(bucket) {
            bucket.__proto__.constructor = AddCategoryCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async save(bucket) {
            bucket.__proto__.constructor = AddCategoryCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async buy(bucketID) {
            bucket.__proto__.constructor = AddCategoryCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async delete(bucketID) {
            commandBus.send(bucketID);
        },
    };
};
module.exports = CategorysController;