const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./userModel');
const Room = require('./roomModel');

const Reservation = db.define('Reservation', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  checkInDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOutDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    defaultValue: 'Pending', // Pending, Paid
  },
});

// Associations
Reservation.belongsTo(User, { foreignKey: 'userId' });
Reservation.belongsTo(Room, { foreignKey: 'roomId' });

module.exports = Reservation;