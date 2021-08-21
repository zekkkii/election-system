 const auth = (req, res, next) => {
  if(!req.session.isAuth) {
    req.flash('error', 'Usted no cuenta con los permisos requeridos para entrar a esta seccion')
    return  res.redirect('/login')
  } else {
    res.locals.auth = req.session.isAuth
    next()
  }
}

const verifyAuthIslogged = (req, res, next) => {
  if(req.session.isAuth)  return res.redirect('/admin') 
  next() 
   
}

module.exports = { auth, verifyAuthIslogged}