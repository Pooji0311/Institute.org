import jwt from 'jsonwebtoken';
import Member from '../models/Member.js';

export const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.member = await Member.findById(decoded.id);
    if (!req.member) return res.status(401).json({ error: 'Member not found' });
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};