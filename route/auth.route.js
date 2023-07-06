import express from 'express';
import { handleLogin, handleReg } from '../controller/auth.controller.js';

export const authRoute = express.Router();

authRoute.post('/login', handleLogin)

authRoute.post('/register', handleReg)