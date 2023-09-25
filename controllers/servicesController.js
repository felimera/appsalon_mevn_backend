import { services } from "../data/beautyServices.js";

const createService = async (req, res) => {
  if (Object.values(req.body).includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message,
    });
  }
};

const getServices = (req, res) => {
  res.json(services);
};

export { createService, getServices };
