import express from 'express';
import { createTeam, deleteTeam, getTeams } from '../controller/team.controller.js';

export const teamRoute = express.Router();

teamRoute.post('/', createTeam);

teamRoute.get('/', getTeams);

teamRoute.delete('/:id', deleteTeam);
