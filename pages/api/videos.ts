import Youtube from 'models/youtube';
import connectDB from 'middleware/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const videos = await Youtube.find().sort({ createdAt: 'DESC' }).exec();
      res.status(200).json(videos);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error' });
    }
  }
}

export default connectDB(handler);
