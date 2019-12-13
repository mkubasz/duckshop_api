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
    position: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null },
    closed_at: { type: Date, default: null }
});

module.exports = bucketSchema;