const Message = require('./message.model');

exports.getAll = async (req, res) => {
  try {
    let messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getById = async (req, res) => {
  try {
    let message = await Message.findByPk(req.params.id);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.create = async (req, res) => {
  try {
    let message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.update = async (req, res) => {
  try {
    let result = await Message.update(req.body, {
      where: { id: req.params.id }
    });
    if (result[0] === 1) {
      let updatedMessage = await Message.findByPk(req.params.id);
      res.status(200).json(updatedMessage);
    } else {
      res.status(404).json({ error: 'Message not found or no changes made' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.delete = async (req, res) => {
  try {
    let result = await Message.destroy({
      where: { id: req.params.id }
    });
    if (result === 1) {
      res.status(200).json({ message: 'Message deleted successfully' });
    } else {
      res.status(404).json({ error: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}