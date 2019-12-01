const CommandBus = (commandsRegister) => {
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