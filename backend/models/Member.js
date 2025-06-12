import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
   bio:{ type: String, default: "" },
   phone:{ type: String, default: "" },
    avatar: { type: String, default: "" },
    profileImage: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Member', memberSchema);
