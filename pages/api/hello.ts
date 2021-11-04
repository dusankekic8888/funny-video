import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from 'middleware/mongodb';

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' });
};

export default connectDB(handler);
