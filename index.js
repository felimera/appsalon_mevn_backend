const express = require("express");

// Configurar la app
const app = express();
// Definir una ruta
app.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      price: 30,
      name: "Laptop",
    },
    {
      id: 2,
      price: 50,
      name: "Monitor",
    },
  ];
  res.json(products);
});
// Definir un puerto
const PORT = process.env.PORT || 4000;
// Arracar la app
app.listen(PORT, () => {
  console.log("El servidor se esta ejecutando en el puerto : " + PORT);
});
