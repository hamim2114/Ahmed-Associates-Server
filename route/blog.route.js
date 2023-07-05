import express from 'express';
import {
  createBlog,
  deleteBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
} from '../controller/blog.controller.js';

export const blogRoute = express.Router();

blogRoute.post('/', createBlog);

blogRoute.get('/', getBlog);

blogRoute.put('/:blogId', updateBlog);

blogRoute.get('/:blogId', getSingleBlog);

blogRoute.delete('/:blogId', deleteBlog);
