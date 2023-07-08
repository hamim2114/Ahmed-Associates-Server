import express from 'express';
import { handleLogin, handleLogout, handleReg } from '../controller/auth.controller.js';

export const authRoute = express.Router();

authRoute.post('/login', handleLogin);

authRoute.post('/logout', handleLogout);

authRoute.post('/register', handleReg);