import Member from '../models/Member.js';

// Search members
export const searchMembers = async (req, res) => {
  try {
    const { firstName, lastName } = req.query;
    const query = {};
    if (firstName) query.firstName = new RegExp(firstName, 'i');
    if (lastName) query.lastName = new RegExp(lastName, 'i');
    const members = await Member.find(query).select('-password');
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get own profile
export const getProfile = async (req, res) => {
  res.json(req.member);
};

// Update own profile
export const updateProfile = async (req, res) => {
  const { firstName, lastName, bio, avatar, phone } = req.body;
  req.member.firstName = firstName || req.member.firstName;
  req.member.lastName  = lastName  || req.member.lastName;
  req.member.bio       = bio       || req.member.bio;
  req.member.avatar    = avatar    || req.member.avatar;
  req.member.phone     = phone     || req.member.phone;
  await req.member.save();
  res.json(req.member);
};