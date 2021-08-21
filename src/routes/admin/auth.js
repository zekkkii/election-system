const { Router } = require('express')

const { loginView, loginController, logout } = require('../../controllers/admin/auth')

const router = Router()

router.get('/', loginView)
router.post('/', loginController)
router.post('/logout', logout)


module.exports = router