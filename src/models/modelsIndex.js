const candidatos = require('./candidatos')
const puestoElectivo = require('./puestoElectivo')
const partidos = require('./partidos')
const elecciones = require('./elecciones')
const ciudadanos = require('./ciudadanos')
const usuarios = require('./usuarios')
const estadisticas = require('./estadisticas')

candidatos.belongsTo(partidos,{constraint: true, onDelete: 'CASCADE'})
partidos.hasMany(candidatos)

candidatos.belongsTo(puestoElectivo,{constraint: true, onDelete: 'CASCADE'})
puestoElectivo.hasMany(candidatos)


estadisticas.belongsTo(candidatos,{constraint: true, onUpdate: 'CASCADE'})
candidatos.hasMany(estadisticas)

estadisticas.belongsTo(elecciones,{constraint: true, onUpdate: 'CASCADE'})
elecciones.hasMany(estadisticas)

module.exports = {
  candidatos,
  puestoElectivo,
  partidos,
  elecciones,
  ciudadanos,
  usuarios,
}