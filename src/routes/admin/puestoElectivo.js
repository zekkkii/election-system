const { Router } = require('express')

const router = Router()

router.get('/puesto_electivo', (req, res)=>{})
router.get('/puesto_electivo/view_all', (req, res)=>{})

router.get('/puesto_electivo/create', (req, res)=>{})
router.post('/puesto_electivo/create', (req, res)=>{})

router.get('/puesto_electivo/update', (req, res)=>{})
router.get('/puesto_electivo/update/:id', (req, res)=>{})
router.post('/puesto_electivo/update/:id', (req, res)=>{})

router.get('/puesto_electivo/delete', (req, res)=>{})
router.post('/puesto_electivo/delete:id', (req, res)=>{})

module.exports = router