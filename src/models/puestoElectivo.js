const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const puestoElectivo = db.define('puestoElectivo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = puestoElectivo