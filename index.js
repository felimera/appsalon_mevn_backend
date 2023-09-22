import express from "express"; // ESM
import servicesRoutes from "./routes/servicesRoutes.js";

// Configurar la app
const app = express();
// Definir una ruta
app.use("/api/services", servicesRoutes);
// Definir un puerto
const PORT = process.env.PORT || 4000;
// Arracar la app
app.listen(PORT, () => {
  console.log("El servidor se esta ejecutando en el puerto : " + PORT);
});
