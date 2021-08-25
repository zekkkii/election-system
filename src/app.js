const express = require('express')
const hb = require('express-handlebars')
const path = require('path')
const sessions = require('express-session')
const flash = require('connect-flash');


// db 

const db = require('./config/db')

// routes

const { userRoutes, adminRoutes, auth:athorization } = require('./routes/router')

// models
const { 
  candidatos,
  puestoElectivo,
  partidos,
  elecciones,
  ciudadanos,
  usuarios,
  estadisticas
} = require('./models/modelsIndex')

// middlewares

const { auth, verifyAuthIslogged } = require('./middlewares/auth')
const flashMiddleware = require('./middlewares/flash')

// helpers

const compare = require('./helpers/compare')


const app = express()

app.use(sessions({
  secret: '!@#$%^&()qwertyASDFG)',
  resave: false,
  saveUninitialized:false
  })
)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(flash())

app.engine('hbs', hb({
  layoutsDir:'src/views/layouts/',
  defaultLayout: 'main-layout',
  extname:'hbs',
  helpers: {
    compare: compare
  }
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views')

// this middleware is for setting in locals all the flash messages
app.use(flashMiddleware)

app.use('/user', verifyAuthIslogged, userRoutes)
app.use('/login', verifyAuthIslogged, athorization)
app.use('/admin', auth, adminRoutes)

const port = 3000

app.listen(port, async () => {
  console.log(`App working correctly on port ${port}`)
  try {
    await db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
