const { Router } = require('express')

const candidatos = require('./candidatos')
const partidos = require('./partidos')
const puestoElectivo = require('./puestoElectivo')
const ciudadanos = require('./ciudadanos')
const elecciones = require('./elecciones')

const router = Router()

router.get('/', (req, res)=>{res.send('working')})

router.get('/login', (req, res)=>{})
router.post('/login', (req, res)=>{})

router.get('/menu', (req, res)=>{})

router.use(candidatos)
router.use(partidos)
router.use(puestoElectivo)
router.use(ciudadanos)
router.use(elecciones)

module.exports = router