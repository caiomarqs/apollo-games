import express from 'express';

import { requireLogin } from '../middlewares/requireLogin';
import { Slide } from '../models/Slide';

export const slideRoutes = express.Router();
const slide = Slide.fromMongoDB();

slideRoutes.post('/api/slide/add/member', requireLogin, slide.insertOneSlide);
slideRoutes.get('/api/slide/fetch/:slide', slide.fetchAllSlides);
slideRoutes.patch(
  '/api/slide/update/member/:_id',
  requireLogin,
  slide.updateOneSlide
);
slideRoutes.delete(
  '/api/slide/delete/member/:_id',
  requireLogin,
  slide.deleteOneSlide
);
