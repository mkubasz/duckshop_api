const CreateBucketCreate = require('../bucket/application/CreateBucketCommand');
const BucketCommandHandler = require('../bucket/application/BucketCommandHandler');

const CommandBus = (dataProvider) => {
    const commandsRegister = [
        {command: CreateBucketCreate, handler: BucketCommandHandler(dataProvider.buckets)}
    ];
    return {
        async send(command) {
            const handler = commandsRegister.find(
                (item) =>
                    command.constructor.name === item.command.name
            );
            await handler.handler.handle(command);
        }
    };
};

module.exports = CommandBus;