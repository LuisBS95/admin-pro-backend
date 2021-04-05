const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');


const app = express();

//Configuarar Cors
app.use(cors());

//Base de datos
dbConnection();

console.log(process.env);

//Rutas
//mean_user
//MTatd9TpmmbPeCCR
app.get("/", (req, res) => {

    res.status(400).json({
        ok: true,
        msg: "Hola Mundo"
    });
});


app.listen(3000, () => {
    console.log("servidor corriendo");
});