const { Router } = require('express')

const home = require('./home')
const candidatos = require('./candidatos')
const partidos = require('./partidos')
const puestoElectivo = require('./puestoElectivo')
const ciudadanos = require('./ciudadanos')
const elecciones = require('./elecciones')




const router = Router()



router.use(candidatos)
router.use(partidos)
router.use(puestoElectivo)
router.use(ciudadanos)
router.use(elecciones)
router.use(home)

module.exports = router