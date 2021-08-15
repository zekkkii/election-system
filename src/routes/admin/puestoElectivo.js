const { Router } = require('express')


const { menu, viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/puestoElectivo')

const router = Router()

router.get('/puesto_electivo', menu)
router.get('/puesto_electivo/view_all', viewAll)

router.get('/puesto_electivo/create', createView)
router.post('/puesto_electivo/create', createPost)

router.get('/puesto_electivo/update', updateView)
router.get('/puesto_electivo/update/:id', updateViewForm)
router.post('/puesto_electivo/update/:id',updatePost)

router.get('/puesto_electivo/delete', deleteView)
router.post('/puesto_electivo/delete:id', deletePost)

module.exports = router