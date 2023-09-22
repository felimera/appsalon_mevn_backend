import mongoose from "mongoose";

export const db = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://root:uo5TCisPNw86DDLz@cluster0.9o94rrl.mongodb.net/"
    );

    console.log("Se conecto exitosamente");
  } catch (error) {
    console.log(`Error :${error.message}`);
    process.exit(1);
  }
};
