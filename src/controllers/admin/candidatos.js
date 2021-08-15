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

const menu =(req, res) => {

  // enviar menu CRUD
  
}

const viewAll = async (req, res) => {
  let data = await getAllData()

  data = data.map( result => result)
  console.log(data)
  //mandar data al front
  
}

const createView =(req, res) => {
  // enviar create view 
}

const createPost =(req, res) => {
  
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

const updatePost =(req, res) => {
  
}

const deleteView = async() => {
  let data = await getAllData()

  data = data.map( result => result)
  console.log(data)
  //mandar data al front
}

const deletePost =(req, res) => {
  // const id = req.params.id

  // const request = await candidatosModel.findAll({where: {id: id}})


  // candidatosModel.update({estado: },{
  //   where:{
  //     id: id
  //   }
  // })
  
}

module.exports =  { 
  menu, 
  viewAll,
  createView,
  createPost,
  updateView,
  updateViewForm,
  updatePost,
  deleteView,
  deletePost 
}