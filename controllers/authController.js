import User from "../models/User.js";
import { sendEmailVerification, sendEmailPasswordReset } from "../emails/authEmailService.js";
import { generateJWT, uniquedId } from "../utils/index.js";

const register = async (req, res) => {
  // Valida todos los campos
  if (Object.values(req.body).includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({ msg: error.message });
  }

  const { email, password, name } = req.body;
  // Evita registros duplicados
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }
  // Validar la extensión del password
  const MIN_PASSWORD_LENGTH = 8;
  if (password.trim().length < MIN_PASSWORD_LENGTH) {
    const error = new Error(
      `El password debe contener ${MIN_PASSWORD_LENGTH} caracteres.`
    );
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    const result = await user.save();

    const { name, email, token } = result;
    sendEmailVerification({
      name: name,
      email: email,
      token: token,
    });

    res.json({
      msg: "El usuario se creo correctamente, revisa tu email.",
    });
  } catch (error) {
    console.log(error);
  }
};

const verifyAccount = async (req, res) => {
  const { token } = req.params;
  const user = await User.findOne({ token: token });
  if (!user) {
    const error = new Error("Hubo un error, token no válido");
    return res.status(401).json({ msg: error.message });
  }

  // Si el token es válido, confirmar la cuenta
  try {
    user.verified = true;
    user.token = "";
    await user.save();
    res.json({ msg: "Usuario confirmado correctamente." });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // Revisar que el usuario exista
  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error(`El Usuario con el email ${email} NO existe`);
    return res.status(401).json({ msg: error.message });
  }
  // Revisar si el suaurio confirmo su cuenta
  if (!user.verified) {
    const error = new Error("Tu cuento no ha sido confirmada aún");
    return res.status(401).json({ msg: error.message });
  }
  // Comrobar el password
  if (await user.checkPassword(password)) {

    const token = generateJWT(user._id);
    res.json({ token: token });

  } else {
    const error = new Error("El password es incorrecto.");
    return res.status(401).json({ msg: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  // Revisar que el usuario exista
  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error(`El Usuario NO existe`);
    return res.status(404).json({ msg: error.message });
  }

  try {
    user.token = uniquedId();
    const result = await user.save();

    await sendEmailPasswordReset({
      name: result.name,
      email: result.email,
      token: result.token
    });

    res.json({ msg: 'Hemos enviado un email con ls intrucciones' });
  } catch (error) {
    console.log(error)
  }

}

const user = (req, res) => {
  const { user } = req;
  res.json(user);
}

export {
  register,
  verifyAccount,
  login,
  forgotPassword,
  user
};
