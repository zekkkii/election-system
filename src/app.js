const express = require('express')
const hb = require('express-handlebars')
const path = require('path')


// db 

const db = require('./config/db')

// routes

const { userRoutes, adminRoutes } = require('./routes/router')

// models
const { 
  candidatos,
  puestoElectivo,
  partidos,
  elecciones,
  ciudadanos,
  usuarios,
} = require('./models/modelsIndex')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', hb({layoutsDir:'src/views/layouts/',defaultLayout: 'main-layout',extname:'hbs'}))
app.set('view engine', 'hbs')
app.set('views', 'src/views')


app.use('/', userRoutes)
app.use('/admin', adminRoutes)

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
