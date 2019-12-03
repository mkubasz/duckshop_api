const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const CommandBus = require('../application/CommandBus');
const QueryBus = require('../infrastructure/QueryBus');

const InMemoryDataProvider = require('../infrastructure/InMemoryDataProvider');
const BucketRegistration = require('../bucket/Registration');

const CreateBucketCommand = require('../bucket/application/CreateBucketCommand');
const UpdateBucketCommand = require('../bucket/application/UpdateBucketCommand');
const DeleteBucketCommand = require('../bucket/application/DeleteBucketCommand');

const GetBucketQuery = require('../bucket/infrastructure/GetBucketQuery');
process.env['TEST'] = true;

describe('Category', () => {
    describe('create', () => {
        it('should return new value of objects', async () => {
            const mock = {
                id: "generatedID1",
                name: "Default1",
                created_at: "data",
                closed_at: "data"
            };
            const commandHandlers = require('../application/Registration')();

            let inMemoryDataProvider = InMemoryDataProvider();
            commandHandlers.registration(BucketRegistration(inMemoryDataProvider).commandsRegister);
            const commandBus = CommandBus(commandHandlers.handlers());
            mock.__proto__ = CreateBucketCommand.prototype;
            await commandBus.send(mock);
            assert.equal(inMemoryDataProvider.buckets.length, 2);
        });
    });

    describe('read', () => {
        it('should return first bucket', async () => {
            const mock = {
                id: "generatedID1",
            };
            let inMemoryDataProvider = InMemoryDataProvider();
            const queryHandlers = require('../application/Registration')();

            queryHandlers.registration(BucketRegistration(inMemoryDataProvider).queryRegister);

            const queryBus = QueryBus(queryHandlers.handlers());
            mock.__proto__ = GetBucketQuery.prototype;

            const result = await queryBus.send(mock);
            assert.equal(result.id, "generatedID1");
        });
    });

    describe('delete', () => {
        it('should return first bucket', async () => {
            const mock = {
                id: "generatedID1",
            };
            let inMemoryDataProvider = InMemoryDataProvider();

            const commandHandlers = require('../application/Registration')();
            commandHandlers.registration(BucketRegistration(inMemoryDataProvider).commandsRegister);
            const commandBus = CommandBus(commandHandlers.handlers());

            mock.__proto__ = DeleteBucketCommand.prototype;

            await commandBus.send(mock);
            assert.equal(inMemoryDataProvider.buckets.length, 0);
        });
    });

    describe('update', () => {
        it('should return first bucket', async () => {
            const mock = {
                id: "generatedID1",
                name: "Default2",
            };
            let inMemoryDataProvider = InMemoryDataProvider();
            const commandHandlers = require('../application/Registration')();

            commandHandlers.registration(BucketRegistration(inMemoryDataProvider).commandsRegister);
            const commandBus = CommandBus(commandHandlers.handlers());

            mock.__proto__ = UpdateBucketCommand.prototype;
            await commandBus.send(mock);
            inMemoryDataProvider.buckets[0].name.should.equal("Default2");
        });
    });
});