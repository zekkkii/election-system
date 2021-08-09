const { Router } = require('express')

const router = Router()

router.get('/partidos', (req, res)=>{})
router.get('/partidos/view_all', (req, res)=>{})

router.get('/partidos/create', (req, res)=>{})
router.post('/partidos/create', (req, res)=>{})

router.get('/partidos/update', (req, res)=>{})
router.get('/partidos/update/:id', (req, res)=>{})
router.post('/partidos/update/:id', (req, res)=>{})

router.get('/partidos/delete', (req, res)=>{})
router.post('/partidos/delete:id', (req, res)=>{})

module.exports = router