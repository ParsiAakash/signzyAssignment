const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    id: {
        type: String, 
        required: true,
    },
    name: { 
        type: String,
        required: true,
    },
    properties: {
        type: [String],
        required: true,
    },
});

// Export the model
module.exports = mongoose.model('Category', CategorySchema);
