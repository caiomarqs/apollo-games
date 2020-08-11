import { Request, Response } from 'express';
import _ from 'lodash';

import { FlashAdState, Database } from '../utils/interfaces';
import { Mongo } from '../database/Mongo';
import { ObjectId } from 'mongodb';

export class FlashAd {
  static fromMongoDB() {
    return new FlashAd(new Mongo('flashads'));
  }
  constructor(public database: Database) {}

  insertOneFlashAd = async (req: Request, res: Response) => {
    const { active, img, title, description, link } = req.body as FlashAdState;
    const serializedFlashAd: FlashAdState = {
      active,
      img,
      title,
      description,
      link,
    };
    try {
      const FlashAd = await this.database.insertOne<FlashAdState>(
        serializedFlashAd
      );

      res.status(201).send(FlashAd);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  updateOneFlashAd = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const updatedFlashAd = req.body;

    try {
      const response = await this.database.updateOne<Partial<FlashAdState>>(
        new ObjectId(_id),
        updatedFlashAd
      );

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  deleteOneFlashAd = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
      const response = await this.database.deleteOne(new ObjectId(_id));

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  fetchAllFlashAds = async (req: Request, res: Response) => {
    try {
      const response = await this.database.findMany<FlashAdState>();

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}
