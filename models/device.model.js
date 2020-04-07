const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DeviceSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: { 
        type: String,
        required: true,
    },
    properties: {
        type: Object,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    }
});

DeviceSchema.index( {categoryId: 1});

// Export the model
module.exports = mongoose.model('Device', DeviceSchema);
