const { Router } = require('express')


const { menu, viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/elecciones')

const router = Router()

router.get('/elecciones', menu)
router.get('/elecciones/view_all', viewAll)

router.get('/elecciones/create', createView)
router.post('/elecciones/create', createPost)

router.get('/elecciones/update', updateView)
router.get('/elecciones/update/:id', updateViewForm)
router.post('/elecciones/update/:id',updatePost)

router.get('/elecciones/delete', deleteView)
router.post('/elecciones/delete:id', deletePost)

module.exports = router