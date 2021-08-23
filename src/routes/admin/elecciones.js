const { Router } = require('express')

const { viewAll, createView, createPost, deletePost, estadisticas } = require('../../controllers/admin/elecciones')

const router = Router()

router.get('/elecciones/view_all', viewAll)

router.get('/elecciones/estadisticas/:id', estadisticas)

router.get('/elecciones/create', createView)
router.post('/elecciones/create', createPost)

router.post('/elecciones/delete/:id', deletePost)

module.exports = router