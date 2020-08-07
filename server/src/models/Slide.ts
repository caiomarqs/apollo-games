import { Request, Response } from 'express';
import _ from 'lodash';

import { SlideState, Database } from '../utils/interfaces';
import { Mongo } from '../database/Mongo';
import { ObjectId } from 'mongodb';

export class Slide {
  static fromMongoDB() {
    return new Slide(new Mongo('slides'));
  }
  constructor(public database: Database) {}

  insertOneSlide = async (req: Request, res: Response) => {
    const { img, button, title, subtitle } = req.body as SlideState;
    const serializedSlide: SlideState = {
      title,
      subtitle,
      img,
      button,
    };
    try {
      const slide = await this.database.insertOne<SlideState>(serializedSlide);

      res.status(201).send(slide);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  updateOneSlide = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const updatedSlide = req.body;

    try {
      const response = await this.database.updateOne<Partial<SlideState>>(
        new ObjectId(_id),
        updatedSlide
      );

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  deleteOneSlide = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
      const response = await this.database.deleteOne(new ObjectId(_id));

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  fetchAllSlides = async (req: Request, res: Response) => {
    try {
      const response = await this.database.findMany<SlideState>();

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}
