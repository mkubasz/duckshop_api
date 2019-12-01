const ClientsRepository = require('./ClientsRepository');
const GetClientQuery = require('./GetClientQuery');
const GetAllClientsQuery = require('./GetAllClientsQuery');

const ClientQueryHandler = (dataProvider) => {
    return {
        async handle(query) {
            if (query instanceof GetClientQuery) {
                return ClientsRepository(dataProvider).get(query.id);
            }
            if (query instanceof GetAllClientsQuery) {
                return ClientsRepository(dataProvider).getAll();
            }
        }
    };
};

module.exports = ClientQueryHandler;