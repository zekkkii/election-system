const candidatosModel = require('../../models/candidatos')
const partidosModel = require('../../models/partidos')
const puestoElectivoModel = require('../../models/puestoElectivo')


const getAllData = async () => {
  const request = await candidatosModel.findAll({
    includes: [
      {
        model: partidosModel
      },
      {
        model: puestoElectivoModel
      }
  ]
  })

  return request
}

const viewAll = async (req, res) => {
  let data = await getAllData()

  data = data.map( result => result)
  console.log(data)
  //mandar data al front
  res.render('admin/candidatos/form-candidatos')
  
}

const createView =(req, res) => {
  // enviar create view 
  res.render('admin/candidatos/form-candidatos',{ editMode: false })
}

const createPost = async (req, res) => {
  const { Name, SelectCargo, SelectPartido } = req.body
  await candidatosModel.create({
    nombre: Name,
    apellido: null,
    fotoPerfil: null,
    estado: null,
    partidoId: SelectPartido,
    puestoElectivoId: SelectCargo
  })
}

const updateView = async () => {
  let data = await getAllData()

  data = data.map( result => result)
  console.log(data)
  //mandar data al front
}

const updateViewForm =(req, res) => {
   // enviar form view 
}

const updatePost = async (req, res) => {
  const id  = req.params.id

  await candidatosModel.create({
    nombre: Name,
    apellido: null,
    fotoPerfil: null,
    estado: null,
    partidoId: SelectPartido,
    puestoElectivoId: SelectCargo
  },
  {
    where: {
      id: id
    }
  }
  )
}

// const deleteView = async() => {
//   let data = await getAllData()

//   data = data.map( result => result)
//   console.log(data)
//   //mandar data al front
// }

const deletePost =(req, res) => {
  // const id = req.params.id

  // const request = await candidatosModel.findOne({where: {id: id}})


  // candidatosModel.update({estado: !request.estado },{
  //   where:{
  //     id: id
  //   }
  // })
  
}

module.exports =  { 
  viewAll,
  createView,
  createPost,
  updateView,
  updateViewForm,
  updatePost,
  // deleteView,
  deletePost 
}