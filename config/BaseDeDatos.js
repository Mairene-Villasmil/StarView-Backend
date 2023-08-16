const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

.then(()=>console.log("Base de Datos Conectada"))
.catch(err => console.error(err))