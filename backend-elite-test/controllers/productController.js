const Product = require('../models/Product');
const User = require('../models/User');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getStarredProducts = async (req, res) => {
  try {
    const starredProducts = await User.find({ starredProduct: { $exists: true } })
      .populate('starredProduct')
      .select('name email starredProduct');

    res.json(starredProducts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const starProduct = (req, res) => {
    const productId = req.params.productId;
    const { rating } = req.body;
  
    const existingStarredItemIndex = starredItems.findIndex(item => item.productId === productId);
  
    if (existingStarredItemIndex !== -1) {
      // Update existing starred item
      starredItems[existingStarredItemIndex].rating = rating;
    } else {
      // Add new starred item
      starredItems.push({
        productId,
        rating,
      });
    }
  
    res.json({ success: true });
  };
  

module.exports = {
  getAllProducts,
  getStarredProducts,
  starProduct
  // Add other controller functions
};
