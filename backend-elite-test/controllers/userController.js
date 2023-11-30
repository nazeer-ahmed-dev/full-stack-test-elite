const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const starProduct = async (req, res) => {
  const { productId, name, email } = req.body;

  try {
    const user = new User({ name, email, starredProduct: productId });
    await user.save();

    res.status(201).json({ message: 'Product starred successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers,
  starProduct,
};
