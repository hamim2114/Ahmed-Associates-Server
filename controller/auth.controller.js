import jwt from 'jsonwebtoken';
import {createError} from '../utils/error.handler.js';
import authModel from '../models/auth.model.js';

export const handleReg = async (req, res, next) => {
  try {
    const exAdmin = await authModel.find();
    
    if (exAdmin.length) {
      return next(createError(500, 'Not Complate!'));
    }
    const newAdmin = new authModel(req.body);
    await newAdmin.save();
    res.status(201).send('Registration Complate!')
  } catch (error) {
    next(error);
  }
};

export const handleLogin = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    const admin = await authModel.findOne({email: email});
    if(!admin) return next(createError('404', 'Email Not Found!'));
    const pass = await authModel.findOne({password: password});
    if(!pass) return next(createError(404, 'Password Not Match!'))
    const token = jwt.sign({id: admin._id}, process.env.JWT_SECRET);
    res
      .cookie('access_token', token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })
      .status(200)
      .send('Login Success!');
  } catch (error) {
    next(error);
  }
};
