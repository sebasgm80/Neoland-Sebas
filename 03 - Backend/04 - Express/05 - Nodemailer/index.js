
// Importamos los módulos necesarios y configuramos el archivo de variables de entorno (.env)
const express = require("express"); // Importamos el módulo para la creación del servidor web
const dotenv = require("dotenv"); // Importamos el módulo para la configuración de variables de entorno
const nodemailer = require("nodemailer"); // Importamos el módulo para el envío de correos electrónicos

dotenv.config(); // Configuramos el archivo .env

// Configuramos el puerto en el que escucharará el servidor a través de las variables de entorno
const PORT = process.env.PORT;

// Creamos el servidor web
const app = express();

// Configuramos el router para la gestión de rutas
const router = express.Router();

// Creamos una función para gestionar el endpoint '/sendNewEmail' con el método GET
router.get("/sendNewEmail", (req, res, next) => {
    // Traemos el email y password de las variables de entorno
    const EMAIL = process.env.EMAIL;
    const PASSWORD = process.env.PASS;

    // Creamos una función para el envío de correo electrónico
    const transporter = nodemailer.createTransport({
        service: "gmail", // Servicio de envío de correo electrónico
        auth: {
            user: EMAIL, // Email de autenticación
            pass: PASSWORD // Contraseña de autenticación
        }
    });

    // Creamos las opciones del email que queremos enviar
    const mailOptions = {
        from: EMAIL, // Email de remitente
        to: "maxpein@gmail.com", // Email de destino
        subject: "Email de prueba", // Asunto del email
        text: "Hola desde nodemailer" // Texto del email
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // Si ocurre un error, pasamos el mismo a la función de manejo de errores
            return next(error);
        } else {
            // Si el envío del email es exitoso, respondemos con el mensaje de respuesta del servidor de correo electrónico
            res.status(200).json(`Email enviado: ${info.response}`);
        }
    });
});

// Usamos el router para las rutas en la ruta '/api/v1'
app.use("/api/v1", router);

// Escuchamos el servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/api/v1/sendNewEmail`);
});
