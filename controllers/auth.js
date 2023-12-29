const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signin = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user =  await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:'User does not exists'
            })
        }
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(
                { email: user.email, role: user.role, id: user._id},
                process.env.JWT_SECRET,
                {
                  expiresIn: "24h",
                }
            )
            user.token = token
      user.password = undefined;
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
    return res.cookie("token", token, options).status(200).json({
        status: true,
        data:user,
        token:token,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}