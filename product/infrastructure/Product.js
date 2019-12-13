const mongoose = require('mongoose');

/*
    Product Model
        id: string -- Uuid format
        name: string -- Label
        created_at: data -- Created bucket
        closed_at: data -- Closed bucket
 */

const productSchema = new mongoose.Schema({
    productID: String,
    bucketID: {type: mongoose.Schema.Types.ObjectId, ref: 'Bucket'},
    name: String,
    description: String,
    position: Number,
    amount: Number,
    category: String,
    image_name: String,
    image: Buffer,
    bought_at: { type: Date, default: null }
});

module.exports = productSchema;