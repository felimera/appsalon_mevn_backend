import express from "express"; // ESM
import dotenv from 'dotenv';
import colors from 'colors';
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";

// Variables de entorno
dotenv.config()
// Configurar la app
const app = express();
// Conectando a BD
db();
// Definir una ruta
app.use("/api/services", servicesRoutes);
// Definir un puerto
const PORT = process.env.PORT || 4000;
// Arracar la app
app.listen(PORT, () => {
  console.log(colors.blue("El servidor se esta ejecutando en el puerto : "), colors.blue.bold(PORT));
});
