const candidatossModel = require('../../models/partidos')
const partidosModel = require('../../models/partidos')
const puestoElectivoModel = require('../../models/puestoElectivo')




const viewAll = async (req, res) => {
  let data = await partidosModel.findAll()

  data = data.map( result => result.dataValues)
  console.log(data)
  res.render('admin/partidos/listar-partidos', {data: data})
  
}

const createView = async (req, res) => {
  let partidos = await partidosModel.findAll()
  partidos = partidos.map(result => result.dataValues)

  let puestos = await puestoElectivoModel.findAll()
  puestos = partidos.map(result => result.dataValues)

  res.render('admin/partidos/form-partidos')
}

const createPost = async (req, res) => {
 try{

  let { Name, descripcion, StatusActive } = req.body
  let img = 'no-image-icon.png'

// terminar
  
  if(!Name || !descripcion) {
    req.flash('error', 'Debes llenar todos los campos')
    return res.redirect('/admin/partidos/create')
  }

  if(req.file) img =  req.file.filename
  if(!StatusActive) {
    StatusActive = false
  } else {
    StatusActive = true
  }

  await partidosModel.create({
    nombre: Name,
    descripcion: descripcion,
    logoPartido: img,
    estado: StatusActive
  })
  res.redirect('/admin/partidos/view_all')
 }
 catch(err){
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
   res.redirect('/admin/partidos/create')
 }

}

const updateViewForm = async (req, res) => {
   // enviar form view 
 try{
  const id = req.params.id
  let data = await partidosModel.findOne({
    where:{
      id: id
    },
  })
  data = data.dataValues

  res.render('admin/partidos/form-partidos',{ 
    editMode: true,
    data: data
  })

 } catch(err) {
  console.log(err)
  req.flash('error', 'Algo sucedio, contacte con el administrador...')
  res.redirect('/admin/partidos/view_all')

 }
}

const updatePost = async (req, res) => {
  try {
    const id  = req.params.id

  let { Name, descripcion, StatusActive } = req.body

  if(!Name) {
    req.flash('error', 'Debes llenar todos los campos')
    return res.redirect(`/admin/partidos/update/${id}`)
  }

 
  if(!StatusActive) {
    StatusActive = false
  } else {
    StatusActive = true
  }


  let data = await partidosModel.findOne({
    where:{
      id: id
    },
  })
  
  data = data.dataValues
  if(req.file) data.logoPartido = req.file.filename
  await partidosModel.update({
    nombre: Name,
    descripcion: descripcion,
    logoPartido:  data.logoPartido,
    estado: StatusActive
  },
  {
    where: {
      id: id
    }
  }
  )
  res.redirect('/admin/partidos/view_all')
  } catch(err) {
    console.log(err)
    req.flash('error', 'Algo sucedio, contacte con el administrador...')
    res.redirect(`/admin/partidos/update/${id}`)
  }
}

// const deleteView = async() => {
//   let data = await getAllpartidosData()

//   data = data.map( result => result)
//   console.log(data)
//   //mandar data al front
// }

const deletePost = async (req, res) => {
  const id = req.params.id

 try{

  await partidosModel.update({estado: false },{
    where:{
      id: id
    }
  })

  req.flash('exito', 'Accion completada con exito!')
  res.redirect('/admin/partidos/view_all')

 } catch(err) {
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
   res.redirect('/admin/partidos/view_all')
 }
  
}

module.exports =  { 
  viewAll,
  createView,
  createPost,
  // updateView,
  updateViewForm,
  updatePost,
  // deleteView,
  deletePost 
}