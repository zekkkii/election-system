const loginView = (req, res) => {
  res.render('admin/login/admin-login')
}

const loginController = (req, res) => {
  const { name, password } = req.body
}

module.exports = { loginView, loginController }