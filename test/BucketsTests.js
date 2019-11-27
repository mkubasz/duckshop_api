const assert = require('assert');
const CommandBus = require('../application/CommandBus');
const QueryBus = require('../infrastructure/QueryBus');

const CreateBucketCreate = require('../bucket/application/CreateBucketCommand');
const GetBucketQuery = require('../bucket/infrastructure/GetBucketQuery');
const inMemoryDataProvider = require('../infrastructure/InMemoryDataProvider')();

describe('Buckets', () => {
    describe('create', () => {
        it('should return new value of objects', () => {
            const mock = {
                    id: "generatedID1",
                    name: "Default1",
                    created_at: "data",
                    closed_at: "data"
            };
            const commandBus = CommandBus(inMemoryDataProvider);
            const command = new CreateBucketCreate();
            Object.assign(command, mock);
            commandBus.handle(command);
            assert.equal(inMemoryDataProvider.buckets.length, 2);
        });
    });
    describe('read', () => {
        it('should return first bucket', () => {
            const mock = {
                id: "generatedID1",
            };
            const queryBus = QueryBus(inMemoryDataProvider);
            const query = new GetBucketQuery();

            Object.assign(query, mock);
            const result = queryBus.handle(query);
            assert.equal(result.id, "generatedID1");
        });
    });
});