const candidatos = require('./candidatos')
const puestoElectivo = require('./puestoElectivo')
const partidos = require('./partidos')
const elecciones = require('./elecciones')
const ciudadanos = require('./ciudadanos')
const usuarios = require('./usuarios')

candidatos.belongsTo(partidos,{constraint: true, onDelete: 'CASCADE'})
partidos.hasMany(candidatos)

candidatos.belongsTo(puestoElectivo,{constraint: true, onDelete: 'CASCADE'})
puestoElectivo.hasMany(candidatos)

module.exports = {
  candidatos,
  puestoElectivo,
  partidos,
  elecciones,
  ciudadanos,
  usuarios,
}