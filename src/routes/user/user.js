const { Router } = require('express')

const {
  indexUserView,
  indexUserController,
  puestosElectivos,
  puestosPresidenteView,
  puestosPresidenteController,
  puestosAlcaldeView,
  puestosAlcaldeController,
  puestosSenadorView,
  puestosSenadorController,
  puestosDiputadoView,
  puestosDiputadoController
} = require('../../controllers/user/user')

const router = Router()

router.get('/', indexUserView)
router.post('/', indexUserController)

router.get('/puestos-electivos', puestosElectivos)

router.get('/catalogo-puestos/Presidente', puestosPresidenteView)
router.post('/catalogo-puestos/Presidente/:id', puestosPresidenteController)

router.get('/catalogo-puestos/Alcalde', puestosAlcaldeView)
router.post('/catalogo-puestos/Alcalde/:id', puestosAlcaldeController)

router.get('/catalogo-puestos/Senador', puestosSenadorView)
router.post('/catalogo-puestos/Senador/:id', puestosSenadorController)

router.get('/catalogo-puestos/Diputado', puestosDiputadoView)
router.post('/catalogo-puestos/Diputado/:id', puestosDiputadoController)

module.exports = router
