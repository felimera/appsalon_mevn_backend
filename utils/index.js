import mongoose from "mongoose";

function validateObjetcId(id,res)
{
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error("El ID no es válido");
        return res.status(400).json({
          msg: error.message,
        });
      }
}

export
{
    validateObjetcId
}