const connectFlash = (req, res, next)=>{
  const errors = req.flash('error')
  const exito = req.flash('exito')
  res.locals.errors =  errors
  res.locals.exito =  exito
  
  next()
}

module.exports = connectFlash