const candidatosModel = require('../../models/candidatos')
const partidosModel = require('../../models/partidos')
const puestoElectivoModel = require('../../models/puestoElectivo')




const viewAll = async (req, res) => {
  let data = await candidatosModel.findAll({
    include: [
      { model:partidosModel },
      { model: puestoElectivoModel }
    ]
  })

  data = data.map( result => result.dataValues)
  res.render('admin/candidatos/listar-candidatos', {
    data: data,
    partido: data[0].partido.dataValues.nombre,
    puesto: data[0].puestoElectivo.dataValues.nombre,

  })
  
}

const createView = async (req, res) => {
  let partidos = await partidosModel.findAll()
  partidos = partidos.map(result => result.dataValues)

  let puestos = await puestoElectivoModel.findAll()
  puestos = puestos.map(result => result.dataValues)

  res.render('admin/candidatos/form-candidatos',{ puestos:puestos, partidos: partidos })
}

const createPost = async (req, res) => {
 try{

  let { Name, Apellidos, SelectCargo, SelectPartido, statusActive } = req.body
  let img = 'img-perfil.jpg'

// terminar
  
  if(!Name || !Apellidos || !SelectCargo || !SelectPartido) {
    req.flash('error', 'Debes llenar todos los campos')
    return res.redirect('/admin/candidatos/create')
  }

  if(req.file) img =  req.file.filename
  if(!statusActive) {
    statusActive = false
  }  else {
    statusActive = true
  }

  await candidatosModel.create({
    nombre: Name,
    apellido: Apellidos,
    fotoPerfil: img,
    estado: statusActive,
    partidoId: SelectPartido,
    puestoElectivoId: SelectCargo
  })
  res.redirect('/admin/candidatos/view_all')
 }
 catch(err){
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
   res.redirect('/admin/candidatos/create')
 }

 

}

const updateViewForm = async (req, res) => {
   // enviar form view 
 try{
  const id = req.params.id
  let data = await candidatosModel.findOne({
    where:{
      id: id
    },
  })
  data = data.dataValues

  let partidos = await partidosModel.findAll()
  partidos = partidos.map( result => result.dataValues)

  let puestosElectivos = await puestoElectivoModel.findAll()
  puestosElectivos = puestosElectivos.map( result => result.dataValues)

  res.render('admin/candidatos/form-candidatos',{ 
    editMode: true,
    data: data,
    puestos: puestosElectivos,
    partidos: partidos
  })

 } catch(err) {
  console.log(err)
  req.flash('error', 'Algo sucedio, contacte con el administrador...')
  res.redirect('/admin/candidatos/view_all')

 }
}

const updatePost = async (req, res) => {
  try {
    const id  = req.params.id

    let { Name, Apellidos, SelectCargo, SelectPartido, statusActive } = req.body
    
    if(!Name || !Apellidos || !SelectCargo || !SelectPartido) {
      req.flash('error', 'Debes llenar todos los campos')
      return res.redirect('/admin/candidatos/create')
    }
 
  if(!statusActive) {
    statusActive = false
  } else {
    statusActive = true
  }


  let data = await candidatosModel.findOne({
    where:{
      id: id
    },
  })
  
  data = data.dataValues
  if(req.file) data.logoPartido = req.file.filename
  
  await candidatosModel.update({
    nombre: Name,
    apellido: Apellidos,
    fotoPerfil: data.logoPartido,
    estado: statusActive,
    partidoId: SelectPartido,
    puestoElectivoId: SelectCargo
  },
  {
    where: {
      id: id
    }
  }
  )
  res.redirect('/admin/candidatos/view_all')
  } catch(err) {
    console.log(err)
    req.flash('error', 'Algo sucedio, contacte con el administrador...')
    res.redirect(`/admin/candidatos/view_all`)
  }
}

// const deleteView = async() => {
//   let data = await getAllCandidatosData()

//   data = data.map( result => result)
//   console.log(data)
//   //mandar data al front
// }

const deletePost = async (req, res) => {
  const id = req.params.id

 try{

  await candidatosModel.update({estado: false },{
    where:{
      id: id
    }
  })

  req.flash('exito', 'Accion completada con exito!')
  res.redirect('/admin/candidatos/view_all')

 } catch(err) {
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
   res.redirect('/admin/candidatos/view_all')
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