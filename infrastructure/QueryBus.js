
const QueryBus = (queryRegister) => {
    return {
        async send(query) {
            const handler = queryRegister.find(
                (item) =>
                    query.constructor.name === item.query.name
            );
            return await handler.handler.handle(query);
        }
    };
};

module.exports = QueryBus;