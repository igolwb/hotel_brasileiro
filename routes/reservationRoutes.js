const express = require('express');
const Reservation = require('../models/reservationModel');
const router = express.Router();

// Create a reservation
router.post('/', async (req, res) => {
  const { userId, roomId, checkInDate, checkOutDate, guests } = req.body;
  try {
    const reservation = await Reservation.create({ userId, roomId, checkInDate, checkOutDate, guests });
    res.status(201).json({ message: 'Reservation created successfully', reservation });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;