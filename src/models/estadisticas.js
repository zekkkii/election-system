const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const estadisticas = db.define('estadisticas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  }
})

module.exports = estadisticas