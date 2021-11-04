import connectDB from 'middleware/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import User from 'models/user';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //Only POST mothod is accepted
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !email.includes('@') || !password) {
      res.status(422).send({ message: 'Invalid Data' });
      return;
    }

    const userExist = await User.findOne({ email }).exec();

    if (userExist) {
      res.status(422).send({ message: 'User already exists' });
    }

    bcrypt
      .genSalt(10)
      .then((salt) => {
        bcrypt.hash(password, salt).then((hash) => {
          const user = new User({
            userId: uuidv4(),
            email,
            password: hash,
          });

          user.save();
          res.status(201).send({ message: 'User created' });
        });
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
