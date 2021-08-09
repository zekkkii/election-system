const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const elecciones = db.define('elecciones', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING
  },
  fechaRealizacion: {
    type: DataTypes.DATE(6)
  },
  estado: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = elecciones