import connectDB from 'middleware/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import User from 'models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import withProtect from 'middleware/withProtect';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jwtSecret = process.env.JWT_SECRET || 'funnyMovies';

  if (req.method === 'GET') {
    if (!('token' in req.cookies)) {
      res.status(401).json({ message: 'Unable to auth' });
      return;
    }
    let decoded;
    const token = req.cookies.token;
    if (token) {
      try {
        decoded = jwt.verify(token, jwtSecret);
      } catch (e) {
        console.error(e);
      }
    }

    if (decoded) {
      res.json(decoded);
      return;
    } else {
      res.status(401).json({ message: 'Unable to auth' });
    }
  }
}

export default connectDB(withProtect(handler));
