// routes/product.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas de productos
router.post('/products', productController.createProduct); // Crear producto
router.get('/products', productController.getAllProducts); // Obtener todos los productos
router.get('/products/:id', productController.getProductById); // Obtener producto por ID
router.put('/products/:id', productController.updateProduct); // Actualizar producto
router.delete('/products/:id', productController.deleteProduct); // Eliminar producto

module.exports = router;
