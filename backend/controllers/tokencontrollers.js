const Token = require('../models/Token');

// Create a new token
exports.createToken = async (req, res) => {
  try {
    const { name, symbol, supply } = req.body;
    const token = new Token({ name, symbol, supply });
    await token.save();
    res.status(201).json({ message: 'Token created successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error creating token', error });
  }
};

// Get all tokens
exports.getAllTokens = async (req, res) => {
  try {
    const tokens = await Token.find();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tokens', error });
  }
};

// Get a single token by ID
exports.getTokenById = async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);
    if (!token) {
      return res.status(404).json({ message: 'Token not found' });
    }
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching token', error });
  }
};

// Update a token by ID
exports.updateToken = async (req, res) => {
  try {
    const { name, symbol, supply } = req.body;
    const token = await Token.findByIdAndUpdate(
      req.params.id,
      { name, symbol, supply },
      { new: true }
    );
    if (!token) {
      return res.status(404).json({ message: 'Token not found' });
    }
    res.status(200).json({ message: 'Token updated successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error updating token', error });
  }
};

// Delete a token by ID
exports.deleteToken = async (req, res) => {
  try {
    const token = await Token.findByIdAndDelete(req.params.id);
    if (!token) {
      return res.status(404).json({ message: 'Token not found' });
    }
    res.status(200).json({ message: 'Token deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting token', error });
  }
};