const AddClientCommand = require('../application/AddClientCommand');
const GetClientQuery = require('../infrastructure/GetClientQuery');
const GetAllClientsQuery = require('../infrastructure/GetAllClientQuery');

const ClientsController = ({commandBus, queryBus}) => {
    /*
        Client Model
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
            id.__proto__.constructor = GetClientQuery.prototype.constructor;
            return queryBus.send(id);
        },
        async getAll() {
            const query = new GetAllClientsQuery();
            return queryBus.send(query);
        },
        async add(bucket) {
            bucket.__proto__.constructor = AddClientCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async save(bucket) {
            bucket.__proto__.constructor = AddClientCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async buy(bucketID) {
            bucket.__proto__.constructor = AddClientCommand.prototype.constructor;
            commandBus.send(bucket);
        },
        async delete(bucketID) {
            commandBus.send(bucketID);
        },
    };
};
module.exports = ClientsController;