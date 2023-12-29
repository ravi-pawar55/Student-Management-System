const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Student"],
        default: "Student",
        required: true,
    },
    department: {
        type: String,
        required: true,
        enum:["Computer", "Electrical", "Mechanical", "Civil", "Chemical","Telecommunication","Data Science" ,"Other"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);