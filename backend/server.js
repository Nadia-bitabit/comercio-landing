const serverless = require('serverless-http');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contentful = require('contentful');
const jwt = require('jsonwebtoken');
const LISTA_USUARIOS = require('./usuarios.js');
const authValidator = require('./authValidator');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const secret = 'mi_clave_secreta_super_segura_123';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

router.get('/productos', async (req, res) => {
  try {
    const response = await client.getEntries({ content_type: 'productos' });
    const productos = response.items.map(item => ({
        id: item.sys.id,
        titulo: item.fields.productos,
        descripcion: item.fields.descripcion,
        precio: item.fields.precio,
    }));
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get('/banner', async (req, res) => {
  try {
    const response = await client.getEntries({ content_type: 'banner' });
    const banner = response.items.map(item => ({
        id: item.sys.id,
        titulo: item.fields.titulo,
        subtitulo: item.fields.subtitulo,
        seccion: item.fields.seccion,
    }));
    res.json(banner);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const usuarioEncontrado = LISTA_USUARIOS.find(
        (u) => u.email === email && u.password === password
    );

    const errorDeValidacion = authValidator.validateLoginRules(usuarioEncontrado, req.body);

    if (errorDeValidacion) {
        return res.status(errorDeValidacion.status).send({ error: errorDeValidacion.message });
    }

    const token = jwt.sign({
        sub: usuarioEncontrado.id,
        name: usuarioEncontrado.nombre,
        apellido: usuarioEncontrado.apellido
    }, secret, { expiresIn: "15m" });

    res.status(200).send({ token });
});

const delay = (ms) => (req, res, next) => setTimeout(next, ms);

router.get("/perfil", delay(5000), (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).send({ error: "No autorizado" });
        }
        // El token siempre viaja con el formato "Bearer texto_del_token"
        // [1] se queda solo con el token
        const token = authHeader.split(" ")[1];
        //verificamos el token y obtenemos el payload (la información que pusimos al crear el token)
        const payload = jwt.verify(token, secret); 
        const usuarioDb = LISTA_USUARIOS.find(u => u.id === payload.sub);

        if (!usuarioDb) {
            return res.status(404).send({ error: "Usuario no encontrado" });
        }

        res.send({ usuario: usuarioDb });

    } catch (err) {
        res.status(401).send({ error: "No autorizado" });
    }
});

app.post("/register", (req, res) => {
    const { email, password, nombre, apellido } = req.body;
    if (LISTA_USUARIOS.some(u => u.email === email)) {
        return res.status(400).send({ error: "El email ya está registrado" });
    }
    const nuevoUsuario = {
        id: LISTA_USUARIOS.length + 1,
        email,
        password,
        nombre,
        apellido,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
    LISTA_USUARIOS.push(nuevoUsuario);
    res.status(201).send({ message: "Usuario registrado exitosamente" });
});

app.use('/', router); 

module.exports.handler = serverless(app, { basePath: '/default/servicio' });

if (!process.env.LAMBDA_TASK_ROOT) {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor local de Peluditos encendido!`);
    console.log(`🔗 Escuchando peticiones en: http://localhost:${PORT}`);
  });
}