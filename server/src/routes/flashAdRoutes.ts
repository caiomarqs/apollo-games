import express from 'express';

import { requireLogin } from '../middlewares/requireLogin';
import { FlashAd } from '../models/FlashAd';

export const flashAdRoutes = express.Router();
const flashAd = FlashAd.fromMongoDB();

flashAdRoutes.post('/api/flashAd/add', requireLogin, flashAd.insertOneFlashAd);
flashAdRoutes.get('/api/flashAd/fetch', flashAd.fetchAllFlashAds);
flashAdRoutes.patch(
  '/api/flashAd/update/:_id',
  requireLogin,
  flashAd.updateOneFlashAd
);
flashAdRoutes.delete(
  '/api/flashAd/delete/:_id',
  requireLogin,
  flashAd.deleteOneFlashAd
);
