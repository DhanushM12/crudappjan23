const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)