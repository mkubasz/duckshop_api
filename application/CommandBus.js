const CommandBus = (commandsRegister) => {
    return {
        async send(command) {
            const handler = commandsRegister.find(
                (item) =>
                    command.__proto__.constructor.name === item.command.name
            );
            await handler.handler.handle(command);
        }
    };
};

module.exports = CommandBus;