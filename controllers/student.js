const mongoose = require('mongoose');
const Assignment = require('../models/assignment');

exports.getTasks = async (req, res) => {
    try{
        const id = req.user.id;
        const tasks = await Assignment.find({assignedTo: id})
        if(!tasks) {
            return res.status(404).json({
                success:false,
                message:'No task found',
            });
        }

        return res.status(200).json({
            success:true,
            data: tasks,
        });

    }catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}

exports.changeTaskStatus = async (req, res) => {
    try{
        const id = req.params.id;
        const {status} = req.body;

        const task = await Assignment.findOne({_id: id});
        
        if(!task) {
            return res.status(404).json({
                success:false,
                message:'No task found',
            });
        }

        task.status = status;
        await task.save();

        return res.status(200).json({
            status:true,
            data: task,
        });

    }catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}