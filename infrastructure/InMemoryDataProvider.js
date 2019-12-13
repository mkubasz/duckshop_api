const Category = require('../category/Category');

const InMemoryDataProvider = () => {
    let buckets = [{
        id: "generatedID1",
        name: "Default1",
        created_at: "data",
        closed_at: null,
        position: 0
    }];
    let product = [{
        id: "generatedID1",
        bucketID: "generatedID1",
        name: "Default1",
        description: "Default1",
        amount: 1,
        category: Category.fruits,
        bought_at: null,
        image_name: "some.jpg",
        image: new ArrayBuffer(1),
        position: 0
    }];
    return {buckets, product};
};

module.exports = InMemoryDataProvider;