const { Router, request } = require('express')


const router = Router()

router.get('/ciudadanos', (req, res)=>{})
router.get('/ciudadanos/view_all', (req, res)=>{})

router.get('/ciudadanos/create', (req, res)=>{})
router.post('/ciudadanos/create', (req, res)=>{})

router.get('/ciudadanos/update', (req, res)=>{})
router.get('/ciudadanos/update/:id', (req, res)=>{})
router.post('/ciudadanos/update/:id', (req, res)=>{})

router.get('/ciudadanos/delete', (req, res)=>{})
router.post('/ciudadanos/delete:id', (req, res)=>{})

module.exports = router