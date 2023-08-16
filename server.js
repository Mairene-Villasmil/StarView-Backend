const express = require("express");
const cors = require('cors')
require('dotenv').config()
require ('./config/BaseDeDatos.js')

const app = express();
const Routes = require("./rutas/rutasPeliculas.js")

const PORT = process.env.PORT || 5001

app.set("port", PORT)

app.use(cors())

app.use(express.json())
app.use("/api", Routes)

app.listen(PORT, () =>{
    console.log("SERVIDOR CORRIENDO EN PUERTO: "+app.get("port"));
})