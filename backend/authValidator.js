
const jwt = require("jsonwebtoken");

const authValidator = {
    validateLoginRules: (usuarioDb, body) => {
        const { email, password } = body;
        try {
        if (!email || !password) {
            return { status: 400, message: "Todos los campos son obligatorios." };
        }
        if (usuarioDb.email !== email || usuarioDb.password !== password) {
            return { status: 400, message: "Email o contraseña incorrectos." };
        }
        } catch (err) {
            return { status: 500, message: "Error interno del servidor." };
        }
    },
    validateTokenRules: (authHeader, secret, listaUsuarios) => {
        try {
            if (!authHeader) {
                return { status: 401, message: "Token de autenticación no proporcionado." };
            }
            const token = authHeader.split(" ")[1];
            const payload = jwt.verify(token, secret);
            const usuarioDb = listaUsuarios.find(u => u.id === payload.sub);
            if (!usuarioDb) {
                return { status: 404, message: "Usuario no encontrado." };
            }
            return { success: true, usuario: usuarioDb };
        } catch (err) {
            return { status: 401, message: "Token de autenticación inválido." };
        }
    }};

module.exports = authValidator;