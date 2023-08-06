const express = require("express");
require("dotenv").config();

// crear el servidor 
const app = express();

// lectura de un json
app.use(express.json());

// usar las rutas del usuario
app.use("", require("./routes/usuarios"));

app.listen(process.env.PORT, () => {
  console.log(`Conectado al puerto ${process.env.PORT}`);
});
