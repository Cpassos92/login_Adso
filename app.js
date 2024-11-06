const express = require('express');
const dbconnect = require('./config/db');
const authRoutes = require('./routes/auth');
const clientRoutes = require('./routes/client'); 
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const supplierRoutes = require('./routes/supplier');
const saleRoutes = require('./routes/sale');
const cors = require("cors");

const app = express(); // Mueve esta línea hacia arriba

const corsOptions= {
    origin: "*",
}

// Usa el middleware de CORS
app.use(cors(corsOptions));

// Conectar a la base de datos
dbconnect();

// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes); // Ruta de usuarios
app.use('/api', clientRoutes); // Rutas de clientes
app.use('/api', categoryRoutes); // Rutas de categorías
app.use('/api', productRoutes); // Rutas de productos
app.use('/api', supplierRoutes); // Rutas de proveedores
app.use('/api', saleRoutes); // Rutas de ventas

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
