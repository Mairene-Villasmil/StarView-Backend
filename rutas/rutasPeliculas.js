const Router = require("express").Router()

const controladorPeliculas = require("../controladores/controladorPeliculas")
const {getAllPeliculas, getOnePelicula, mofidyPelicula, addPelicula, addMultiplesPeliculas, removePeliculas, removeManyPeliculas} = controladorPeliculas

Router.route("/peliculas")
.get(getAllPeliculas)
.post((req, res)=>{Array.isArray(req.body.data) ?addMultiplesPeliculas(req, res): addPelicula(req, res)})
.delete(removeManyPeliculas)

Router.route("/peliculas/:id")
.get(getOnePelicula)
.delete(removePeliculas)
.put(mofidyPelicula)

module.exports = Router