const adminRoutes = require('./admin/adminIndex')
const auth = require('./admin/auth')
const userRoutes = require('./user/user')

module.exports = { adminRoutes, userRoutes, auth }