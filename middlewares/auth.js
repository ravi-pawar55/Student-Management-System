const jwt = require('jsonwebtoken');
require('dotenv').config();
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.auth = async (req, res, next) => {
    try{
        //extract token
        const token = req.cookies.token 
                        || req.header("Authorization").replace("Bearer ", "");

        if(!token) {
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }

        //verify the token
        try{
            const decode =  jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }
        catch(err) {
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    }
    catch(error) {  
        return res.status(401).json({
            success:false,
            message:error.message,
        });
    }
}

exports.isAdmin = async (req, res, next) => {
    try{
        const id = req.user.id;
        const user = await User.findOne({_id: id});
        if(user.role !== "Admin") {
            return res.status(401).json({
                success:false,
                message:'You are not authorized',
            });
        }
        next();
    }catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}
