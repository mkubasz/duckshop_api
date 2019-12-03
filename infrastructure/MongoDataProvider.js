const mongoose = require('mongoose');

const dataProvider = async () => {
    return {
        async connect(collectionName, schema) {
            let connection = await mongoose.connect('mongodb://localhost:27017/duck_shoplist', { useNewUrlParser: true })
            return connection.model(collectionName, schema);
        }
    }
};

module.exports = dataProvider;