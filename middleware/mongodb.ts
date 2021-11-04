import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }

    const mongoUrl = process.env.MONGO_URL || '';
    // Use new db connection
    await mongoose.connect(mongoUrl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    });

    return handler(req, res);
  };

export default connectDB;
