const AddClientCommand = require('./application/AddClientCommand');
const ClientCommandHandler = require('./application/ClientCommandHandler');
const ClientQueryHandler = require('./infrastructure/ClientQueryHandler');
const GetClientQuery = require('./infrastructure/GetClientQuery');
const GetAllClientsQuery = require('./infrastructure/GetAllClientQuery');


const ClientRegistration = (dataProvider) => {
    return {
        commandsRegister: [
            {command: AddClientCommand, handler: ClientCommandHandler(dataProvider.buckets)}
        ],
        queryRegister: [
            {query: GetClientQuery, handler: ClientQueryHandler(dataProvider.buckets)},
            {query: GetAllClientsQuery, handler: ClientQueryHandler(dataProvider.buckets)}

        ],
    };
};

module.exports = ClientRegistration;
