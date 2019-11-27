const assert = require('assert');
const bucketsRepository = require('../bucket/BucketsRepository');


describe('BucketsRepository', () => {
    describe('get', () => {
        it('should return one object', () => {
            const result = bucketsRepository().get("generatedID1");
            assert.equal(result.id, "generatedID1");
        });
    });
    describe('getAll', () => {
        it('should return two object', () => {
            const result = bucketsRepository().getAll();
            assert.equal(result.length, 2);
        });
    });

    describe('update', () => {
        it('should return two object', () => {
            const repository = bucketsRepository();
            const old = repository.update({
                id: "generatedID1",
                name: "SuperNowa"
            });
            const result = repository.get("generatedID1");
            assert.equal(result.name, old.name);
        });
    });
    describe('create', () => {
        it('should return three object', () => {
            const repository = bucketsRepository();
            const old = repository.create({
                id: "generatedID1",
                name: "SuperNowa"
            });
            const result = repository.getAll();
            assert.equal(result.length, 3);
        });
    });
    describe('create', () => {
        it('should return one object', () => {
            const repository = bucketsRepository();
            repository.delete("generatedID1");
            const result = repository.getAll();
            assert.equal(result.length, 1);
        });
    });
});