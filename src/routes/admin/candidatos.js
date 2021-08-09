const { Router } = require('express')


const { menu, viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/candidatos')

const router = Router()

router.get('/candidatos', menu)
router.get('/candidatos/view_all', viewAll)

router.get('/candidatos/create', createView)
router.post('/candidatos/create', createPost)

router.get('/candidatos/update', updateView)
router.get('/candidatos/update/:id', updateViewForm)
router.post('/candidatos/update/:id',updatePost)

router.get('/candidatos/delete', deleteView)
router.post('/candidatos/delete:id', deletePost)

module.exports = router