import jwt from "jsonwebtoken";
import { createError } from "../utils/error.handler.js";

export const verifyToken = (req,res,next) => {
  const token = req.cookies.access_token;
  if(!token) return next(createError(401, 'You are not authenticated!'))
  jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
    if(err) return next(createError(403, 'token invalid!'));
    req.admin = admin;
    next();
  })
}