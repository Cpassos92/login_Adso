const express = require('express');
const dbconnect = require('./config/db');
const authRoutes = require('./routes/auth');
const clientRoutes = require('./routes/client'); 
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const supplierRoutes = require('./routes/supplier');
const saleRoutes = require('./routes/sale');


const app = express();

// Conectar a la base de datos
dbconnect();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);// ruta de usuarios
app.use('/api', clientRoutes); // Rutas de clientes
app.use('/api', categoryRoutes); // Rutas de categorías
app.use('/api', productRoutes); // Rutas de productos
app.use('/api', supplierRoutes); // Rutas de proveedores
app.use('/api', saleRoutes); // Rutas de ventas

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
