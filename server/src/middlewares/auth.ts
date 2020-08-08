import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default function verify (request: Request, response: Response, next: NextFunction) {
  const token = request.header('authorization');

  if (!token) return response.status(401).json({ success: false, error: 'Access denied' });

  try {
    jwt.verify(token, process.env.JWT_SECRET || '');
    next();
  } catch (error) {
    response.status(400).json({ success: false, error: 'Invalid token' });
  }
}