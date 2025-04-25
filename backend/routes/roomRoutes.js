const express = require('express');
const Room = require('../models/roomModel');
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new room
router.post('/', async (req, res) => {
  const { title, description, details, price, capacity } = req.body;
  try {
    const room = await Room.create({ title, description, details, price, capacity });
    res.status(201).json({ message: 'Room added successfully', room });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;