import express from 'express';
import {
  createImg,
  deleteImg,
  getImgs,
} from '../controller/gallery.controller.js';

export const galleryRoute = express.Router();

galleryRoute.post('/', createImg);
galleryRoute.get('/', getImgs);
galleryRoute.delete('/:id', deleteImg);
