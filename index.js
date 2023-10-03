import express from "express"; // ESM
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from './routes/appointmentRoutes.js';
import useRoutes from './routes/useRoutes.js'

// Variables de entorno
dotenv.config();
// Configurar la app
const app = express();
// Leer datos via body
app.use(express.json());
// Conectando a BD
db();
// Configurar CORS
const whilelist =
  process.argv[2] === "--postman"
    ? [process.env.FRONTEND_URL, undefined]
    : [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whilelist.includes(origin)) {
      // Permite la conexion
      callback(null, true);
    } else {
      // No permite la conexion
      callback(new Error("Error de CORS"));
    }
  },
};
app.use(cors(corsOptions));
// Definir una ruta
app.use("/api/services", servicesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/users", useRoutes);
// Definir un puerto
const PORT = process.env.PORT || 4000;
// Arracar la app
app.listen(PORT, () => {
  console.log(
    colors.blue("El servidor se esta ejecutando en el puerto : "),
    colors.blue.bold(PORT)
  );
});
