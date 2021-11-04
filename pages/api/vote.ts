import connectDB from 'middleware/mongodb';
import withProtect from 'middleware/withProtect';
import Youtube from 'models/youtube';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //Only POST mothod is accepted
  if (req.method === 'POST') {
    const { email, userId, url, idVideo, vote } = req.body;
    try {
      if (!email || !email.includes('@') || !userId || !url || !idVideo) {
        res.status(422).send({ message: 'Invalid Data' });
      }

      const videoExist = await Youtube.findOne({ email, userId, idVideo }).exec();

      if (videoExist && vote) {
        await Youtube.updateOne({ email, userId, url, idVideo }, { vote });
      }

      res.status(200).send({ message: 'Vote success' });
    } catch (error) {
      res.status(500).send({ message: 'Error' });
    }
  } else {
    res.status(500).send({ message: 'Route not valid' });
  }
}

export default connectDB(withProtect(handler));
