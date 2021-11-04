import connectDB from 'middleware/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import User from 'models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const jwtSecret = process.env.JWT_SECRET || 'funnyMovies';

    if (!email || !email.includes('@') || !password) {
      res.status(422).send({ message: 'Invalid Data' });
      return;
    }

    const user = await User.findOne({ email }).exec();

    if (!user) {
      res.status(422).send({ message: 'User not exists' });
    }

    bcrypt
      .hash(password, user.password)
      .then((result) => {
        if (result) {
          const token = jwt.sign({ userId: user.userId, email: user.email }, jwtSecret, {
            expiresIn: 3000, //50 minutes
          });
          res.status(200).send({ user, token });
          return;
        } else {
          res.status(401).json({ error: true, message: 'Auth Failed' });
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'error' });
      });
  } else {
    res.status(500).send({ message: 'Route not valid' });
  }
}

export default connectDB(handler);
