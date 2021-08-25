const eleccionesModel = require('../../models/elecciones')
const db = require('../../config/db')




const viewAll = async (req, res) => {
  let data = await eleccionesModel.findAll()

  data = data.map( result => result.dataValues)

  const dataLength = data.length - 1
  let ultimaEleccion = data[dataLength]

  res.render('admin/elecciones/listar-elecciones', {data: data, ultimaEleccion: ultimaEleccion})

}

//terminar

const estadisticas = async (req, res) => {
  const id = req.params.id
  let data = await db.query(
  " SELECT candidatos.nombre, " + 
  "(select COUNT(*) FROM estadisticas where id = 1 ) as votos, " + 
  " ((SELECT COUNT(id) FROM estadisticas WHERE id =1)* 100 / (SELECT id from estadisticas) ) as porcentaje " + 
  " FROM `estadisticas` " +
  " inner join candidatos on estadisticas.candidatoId = candidatos.id " +
  " GROUP by candidatos.nombre "+
  " ORDER BY porcentaje ASC; ")

  console.log(data)
  data = data.map( result => result.dataValues)

  const dataLength = data.length - 1
  let ultimaEleccion = data[dataLength]
  
  res.render('admin/elecciones/estadisticas', {data: data, ultimaEleccion: ultimaEleccion})

}
//terminar
const votoPost = async (req, res) => {
  const { candidato, eleccion} = req.query

 try{

  await eleccionesModel.create({
    candidatoId: candidato,
    eleccioneId: eleccion
  })

  req.flash('exito', 'Voto completado con exito!')
  // res.redirect('/admin/elecciones/view_all')

 } catch(err) {
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
//   res.redirect('/admin/elecciones/view_all')
 }
  
}


const createView = async (req, res) => {
  res.render('admin/elecciones/form-eleccion')
}

const createPost = async (req, res) => {
 try{

  let { Eleccion, Fecha } = req.body

  if(!Eleccion || !Fecha) {
    req.flash('error', 'Debes llenar todos los campos')
    return res.redirect('/admin/elecciones/create')
  }

  await eleccionesModel.create({
    nombre: Eleccion,
    fechaRealizacion: Fecha,
    estado: true
  })
  res.redirect('/admin/elecciones/view_all')
 }
 catch(err){
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
   res.redirect('/admin/elecciones/create')
 }

}


const deletePost = async (req, res) => {
  const id = req.params.id

 try{

  await eleccionesModel.update({estado: false },{
    where:{
      id: id
    }
  })

  req.flash('exito', 'Accion completada con exito!')
  res.redirect('/admin/elecciones/view_all')

 } catch(err) {
   console.log(err)
   req.flash('error', 'Algo sucedio, contacte con el administrador...')
   res.redirect('/admin/elecciones/view_all')
 }
  
}

module.exports =  { 
  viewAll,
  estadisticas,
  createView,
  createPost,
  deletePost 
}