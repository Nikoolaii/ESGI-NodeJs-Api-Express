const User = require('./user.model');

exports.getAll = async (req, res) => {
  try {
    let users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getById = async (req, res) => {
  try {
    let user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.create = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.update = async (req, res) => {
  try {
    let result = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (result[0] === 1) {
      let updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found or no changes made' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.delete = async (req, res) => {
  try {
    let result = await User.destroy({
      where: { id: req.params.id }
    });
    if (result === 1) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}