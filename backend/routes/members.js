import express from 'express';
import { searchMembers, getProfile, updateProfile } from '../controllers/memberController.js';
import { auth } from './authMiddleware.js'; // Adjust path if needed

const router = express.Router();

router.get('/members/search', searchMembers);
router.get('/members/me', auth, getProfile);
router.put('/members/me', auth, updateProfile);

export default router;