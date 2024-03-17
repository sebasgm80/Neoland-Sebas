// Importamos nodemailer y dotenv
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const { setTestEmailSend } = require("../state/state.data");

// Hacemos una funcion para exportar como utilidad
// con los parametros que va,os a usar: email, name y codigo de confirmacion del user que crea

const sendEmail = (email, name, confirmationCode) => {
    // ponemos el estado de la funcion set en false inicialmente
    setTestEmailSend(false);

    // Traemos el email y password de las variables de entorno
    const EMAIL = process.env.EMAIL;
    const PASSWORD = process.env.PASSWORD;

    // Trabajar con nodemailer funcion transport, opciones del email y enviar email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });
    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: "Confirmation Code",
        text: `Hola ${name}, gracias por registrarte. Tu código de confirmación es ${confirmationCode}`
    };

    // Esto es lo que cambia de estado
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            // Set test en false el correo no se ha enviado
            setTestEmailSend(false);
            return;
        } 
        console.log("Email sent: " + info.response);
        // Set test en true el correo se ha enviado
        setTestEmailSend(true);
    });
};

// Exportamos la funcion
module.exports = { sendEmail };