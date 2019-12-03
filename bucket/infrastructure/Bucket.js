const mongoose = require('mongoose');

/*
    Bucket Model
        id: string -- Uuid format
        name: string -- Label
        created_at: data -- Created bucket
        closed_at: data -- Closed bucket
 */

const bucketSchema = new mongoose.Schema({
    bucketID: String,
    name: String,
    created_at: { type: Date, default: Date.now },
    closed_at: { type: Date, default: null }
});

module.exports = bucketSchema;