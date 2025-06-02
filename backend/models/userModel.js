import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  skills: [String],
});

const User = mongoose.model('User', userSchema);
export default User;