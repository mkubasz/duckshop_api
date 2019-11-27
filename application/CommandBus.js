const CreateBucketCreate = require('../bucket/application/CreateBucketCommand');
const BucketCommandHandler = require('../bucket/application/BucketCommandHandler');

const CommandBus = (dataProvider) => {
    const commandsRegister = [
        {command: CreateBucketCreate, handler: BucketCommandHandler(dataProvider.buckets)}
    ];
    return {
        handle(command) {
            const handler = commandsRegister.find(
                (item) =>
                    command.constructor.name === item.command.name
            );
            handler.handler.handle(command);
        }
    };
};

module.exports = CommandBus;