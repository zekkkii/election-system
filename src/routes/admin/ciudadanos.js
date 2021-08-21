const { Router } = require('express')

const { viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/ciudadanos')

const router = Router()

router.get('/ciudadanos/view_all', viewAll)

router.get('/ciudadanos/create', createView)
router.post('/ciudadanos/create', createPost)

// router.get('/ciudadanos/update/:id', updateView)
router.get('/ciudadanos/update/:id', updateViewForm)
router.post('/ciudadanos/update/:id',updatePost)

// router.get('/ciudadanos/delete', deleteView)
router.post('/ciudadanos/delete/:id', deletePost)

module.exports = router