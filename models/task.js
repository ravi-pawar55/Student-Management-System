const mongoose = require('mongoose');
const User = require('./user');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueTime: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);