const { Router } = require('express')

const router = Router()

router.get('/candidatos', (req, res)=>{})
router.get('/candidatos/create', (req, res)=>{})
router.post('/candidatos/create', (req, res)=>{})

router.get('/candidatos/update', (req, res)=>{})
router.get('/candidatos/update/:id', (req, res)=>{})
router.post('/candidatos/update/:id', (req, res)=>{})

router.get('/candidatos/delete', (req, res)=>{})
router.post('/candidatos/delete:id', (req, res)=>{})

module.exports = router