import connectDB from 'middleware/mongodb';
import withProtect from 'middleware/withProtect';
import Youtube from 'models/youtube';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //Only POST mothod is accepted
  if (req.method === 'POST') {
    const { email, userId, url, idVideo, title, description } = req.body;
    try {
      if (!email || !email.includes('@') || !userId || !url || !idVideo) {
        res.status(422).send({ message: 'Invalid Data' });
        return;
      }

      const videoExist = await Youtube.findOne({ email, userId, idVideo }).exec();

      if (videoExist) {
        res.status(422).send({ message: 'Video already exists' });
      }

      const video = new Youtube({
        id: uuidv4(),
        userId,
        email,
        url,
        idVideo,
        title,
        description,
        createdAt: Date.now(),
      });

      video.save();
      res.status(201).send({ message: 'Video created' });
    } catch (error) {
      res.status(500).send({ message: 'Error' });
    }
  } else {
    res.status(500).send({ message: 'Route not valid' });
  }
}

export default connectDB(withProtect(handler));
