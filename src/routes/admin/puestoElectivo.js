const { Router } = require('express')

const { viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/puestoElectivo')

const router = Router()

router.get('/puestos_electivos/view_all', viewAll)

router.get('/puestos_electivos/create', createView)
router.post('/puestos_electivos/create', createPost)

// router.get('/puestos_electivos/update/:id', updateView)
router.get('/puestos_electivos/update/:id', updateViewForm)
router.post('/puestos_electivos/update/:id',updatePost)

// router.get('/puestos_electivos/delete', deleteView)
router.post('/puestos_electivos/delete/:id', deletePost)

module.exports = router