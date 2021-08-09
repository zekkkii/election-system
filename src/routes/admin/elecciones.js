const { Router } = require('express')

const router = Router()

router.get('/elecciones', (req, res)=>{})
router.get('/elecciones/view_all', (req, res)=>{})

router.get('/elecciones/create', (req, res)=>{})
router.post('/elecciones/create', (req, res)=>{})

router.get('/elecciones/update', (req, res)=>{})
router.get('/elecciones/update/:id', (req, res)=>{})
router.post('/elecciones/update/:id', (req, res)=>{})

router.get('/elecciones/delete', (req, res)=>{})
router.post('/elecciones/delete:id', (req, res)=>{})

module.exports = router