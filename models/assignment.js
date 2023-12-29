const mongoose = require('mongoose');
const User = require('./user');
const Task = require('./task');

const assignmentSchema = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status:{
        type: String,
        enum: ["Pending", "Due", "Completed"],
        default: "Pending",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

module.exports = mongoose.model('Assignment', assignmentSchema);