const { Router } = require('express')


const { menu, viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/partidos')

const router = Router()

router.get('/partidos', menu)
router.get('/partidos/view_all', viewAll)

router.get('/partidos/create', createView)
router.post('/partidos/create', createPost)

router.get('/partidos/update', updateView)
router.get('/partidos/update/:id', updateViewForm)
router.post('/partidos/update/:id',updatePost)

router.get('/partidos/delete', deleteView)
router.post('/partidos/delete:id', deletePost)

module.exports = router