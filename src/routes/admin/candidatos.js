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


const { viewAll, createView, createPost, updateView, updateViewForm, updatePost, deleteView, deletePost } = require('../../controllers/admin/candidatos')

const router = Router()

router.get('/candidatos/view_all', viewAll)

router.get('/candidatos/create', createView)
router.post('/candidatos/create', upload.single('Imagen_candidato'), createPost)

// router.get('/candidatos/update/:id', updateView)
router.get('/candidatos/update/:id', updateViewForm)
router.post('/candidatos/update/:id',updatePost)

// router.get('/candidatos/delete', deleteView)
router.post('/candidatos/delete/:id', deletePost)

module.exports = router