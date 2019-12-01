const assert = require('assert');
const CommandBus = require('../application/CommandBus');
const QueryBus = require('../infrastructure/QueryBus');

const CreateBucketCreate = require('../bucket/application/CreateBucketCommand');
const GetBucketQuery = require('../bucket/infrastructure/GetBucketQuery');
const InMemoryDataProvider = require('../infrastructure/InMemoryDataProvider')();
const BucketRegistration = require('../bucket/Registration');
const commandHandlers = require('../application/Registration')();
const queryHandlers = require('../application/Registration')();

describe('Buckets', () => {
    describe('create', () => {
        it('should return new value of objects', async () => {
            const mock = {
                    id: "generatedID1",
                    name: "Default1",
                    created_at: "data",
                    closed_at: "data"
            };
            commandHandlers.registration(BucketRegistration(InMemoryDataProvider).commandsRegister);
            const commandBus = CommandBus(commandHandlers.handlers());
            const command = new CreateBucketCreate();
            Object.assign(command, mock);
            await commandBus.send(command);
            assert.equal(InMemoryDataProvider.buckets.length, 2);
        });
    });
    describe('read', () => {
        it('should return first bucket', async () => {
            const mock = {
                id: "generatedID1",
            };
            queryHandlers.registration(BucketRegistration(InMemoryDataProvider).queryRegister);

            const queryBus = QueryBus(queryHandlers.handlers());
            const query = new GetBucketQuery();

            Object.assign(query, mock);
            const result = await queryBus.send(query);
            assert.equal(result.id, "generatedID1");
        });
    });
});