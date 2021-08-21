const { Router } = require('express')
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/public/uploads')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

    let imgType = file.mimetype.split('/')
    imgType = `.${imgType[1]}`

    cb(null, file.originalname + '-' + uniqueSuffix + imgType )

  }
})

const upload = multer({ storage: storage})


const { viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/partidos')

const router = Router()

router.get('/partidos/view_all', viewAll)

router.get('/partidos/create', createView)
router.post('/partidos/create', upload.single('ImagenPartido'), createPost)

// router.get('/partidos/update/:id', updateView)
router.get('/partidos/update/:id', updateViewForm)
router.post('/partidos/update/:id',upload.single('ImagenPartido') ,updatePost)

// router.get('/partidos/delete', deleteView)
router.post('/partidos/delete/:id', deletePost)

module.exports = router