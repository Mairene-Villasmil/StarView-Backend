const mongoose = require("mongoose")

const peliculasSchema = new mongoose.Schema({
    imagen:{type:String, required:true},
    nombre:{type:String, required:true},
    categoria:{type:String, required:true},
    año:{type:Number, required:true},
    tiempo:{type:String, required:true},
    clasificacion:{type:String, required:true},
    descripcion:{type:String, required:true},
    director:{type:String, required:true},
    autor1:{type:String, required:true},
    autor2:{type:String, required:true},
    autor3:{type:String, required:false},
    autor4:{type:String, required:false},
    autor5:{type:String, required:false},
    autor6:{type:String, required:false}
})

const Peliculas = mongoose.model("peliculas", peliculasSchema)

module.exports = Peliculas