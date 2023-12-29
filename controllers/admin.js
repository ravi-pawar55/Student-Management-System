const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const Task = require('../models/task');
const Assignment = require('../models/assignment');

exports.addStudent = async (req,res) => {
    try{
         const {name, email, password,department} = req.body;
         const user = await User.findOne({email});
            if(user) {
                return res.status(400).json({
                    status:false,
                    message:'Email already exists',
                });
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword,
                department,
            });
            newUser.password = undefined;
            return res.status(201).json({
                status:true,
                data: newUser,
            });
    }
    catch(error) {
        return res.status(500).json({
            status:false,
            message:error.message,
        });
    }
}

exports.assignTask = async (req,res) => {
    try{
        const {title, description,dueTime} = req.body;

        const students = await User.find({role: "Student"});
        let studentId = [];
        for(let i=0; i<students.length; i++) {
            studentId.push(students[i]._id);
        }
        const date = new Date(dueTime);
        console.log(date);
        const newTask = await Task.create({
            title,
            description,
            dueTime:date,
        });

        for(let i=0; i<studentId.length; i++) {
            await Assignment.create({
                assignedTo: studentId[i],
                task: newTask._id,
            });
        }

        return res.status(201).json({
            status:true,
        });
    }
    catch(error) {
        return res.status(500).json({
            status:false,
            message:error.message,
        });
    }
}
