const AddClientCommand = require('./AddClientCommand');
const BucketsRepository = require('../infrastructure/ClientsRepository');

const ClientCommandHandler = (dataProvider) => {
    return {
      async handle(command) {
        if (command instanceof AddClientCommand) {
            BucketsRepository(dataProvider).create(command);
        }
      }
    };
};

module.exports = ClientCommandHandler;