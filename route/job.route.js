import express from 'express';
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
} from '../controller/job.controller.js';

export const jobRoute = express.Router();

jobRoute.post('/', createJob);

jobRoute.get('/', getJobs);

jobRoute.put('/:jobId', updateJob);

jobRoute.delete('/:jobId', deleteJob);
