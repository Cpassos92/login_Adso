const express = require('express');
const dbconnect = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Conectar a la base de datos
dbconnect();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
