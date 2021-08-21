const { Router } = require('express')

const home = require('../../controllers/admin/home')

const router = Router()

router.get('/', home)


module.exports = router