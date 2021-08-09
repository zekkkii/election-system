const express = require('express')
const hb = require('express-handlebars')
const path = require('path')


// db 

const db = require('./config/db')

// routes

const { userRoutes, adminRoutes } = require('./routes/index')

// models



const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', 
  hb(
    {
      layoutsDir: 'views/layouts',
      defaultLayout:"main-layout", 
      extname:'hbs',
      helpers: ''
    }
  )
)
app.set('view engine', 'hbs')
app.set('views', 'views')

const port = 3000

app.listen(port, async () => {
  console.log(`App working correctly on port ${port}`)
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
