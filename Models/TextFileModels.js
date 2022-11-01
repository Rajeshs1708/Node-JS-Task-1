const mongoose = require('mongoose');


const testFileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true })

module.exports = mongoose.model("text", testFileSchema);