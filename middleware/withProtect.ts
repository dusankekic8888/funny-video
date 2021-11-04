import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { UserType } from '@/type/user';
import User from '../models/user';

const withProtect = (handler: any) => {
  return async (req: any, res: NextApiResponse) => {
    const jwtSecret = process.env.JWT_SECRET || 'funnyMovies';

    // Get token and check if it exists
    let token;

    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to get access.',
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, jwtSecret) as UserType;
      // Check if user exists with refresh token
      const currentUser = await User.findOne({ email: decoded.email });
      if (!currentUser) {
        return res.status(401).json({
          success: false,
          message: 'The user belonging to this token no longer exist.',
        });
      }

      req.user = currentUser;

      return handler(req, res);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to get access.',
      });
    }
  };
};

export default withProtect;
