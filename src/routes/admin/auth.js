const { Router } = require('express')

const { loginView, loginController } = require('../../controllers/admin/auth')

const router = Router()

router.get('/', loginView)
router.post('/', loginController)


module.exports = router