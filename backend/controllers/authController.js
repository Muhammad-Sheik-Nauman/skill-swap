import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash });
    req.session.userId = user._id;
    res.status(201).json({ message: 'Registered successfully' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};


export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  req.session.userId = user._id;
  res.json({ message: 'Login successful' });
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out' });
  });
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.session.userId).select('-password');
  res.json(user);
};

