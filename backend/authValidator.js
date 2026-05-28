const authValidator = {
    validateLoginRules: (usuarioDb, body) => {
        const { email, password } = body;
        
        if (!email || !password) {
            return { status: 400, message: "Todos los campos son obligatorios." };
        }

        if (usuarioDb.email !== email || usuarioDb.password !== password) {
            return { status: 400, message: "Email o contraseña incorrectos." };
        }
    }};

module.exports = authValidator;