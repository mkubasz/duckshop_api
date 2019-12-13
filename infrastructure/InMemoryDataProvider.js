const InMemoryDataProvider = () => {
    let buckets = [{
        id: "generatedID1",
        name: "Default1",
        created_at: "data",
        closed_at: null
    }];
    let product = [];
    return {buckets, product};
};

module.exports = InMemoryDataProvider;