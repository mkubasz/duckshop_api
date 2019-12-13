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

describe('Client', () => {
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
});