import jwt from "jsonwebtoken";
import { createError } from "../utils/error.handler.js";
import authModel from "../models/auth.model.js";

export const handleLogin = async (req,res,next) => {
  const email = req.body.email;
  try {
    if (email !== process.env.EMAIL){
      return next(createError(404, 'Unauthorized!'))
    }
    const admin = await authModel.findOne({email: email});

    if (!admin){
      const newAdmin = new authModel(req.body);
      await newAdmin.save();
    }
    const existAdmin = await authModel.findOne({email: email})
    const token = jwt.sign(
      {id: existAdmin._id},
      process.env.JWT_SECRET
    )
    res.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true
    }).status(200).send('Login Success!')
  } catch (error) {
    next(error)
  }
}