import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Member from '../models/Member.js';

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const member = new Member({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    await member.save();
    res.status(201).send('Member registered');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const member = await Member.findOne({ email });

    if (!member || !(await bcrypt.compare(password, member.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: member._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};