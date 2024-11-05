// routes/category.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Definir las rutas para la gestión de categorías
router.post('/categories', categoryController.createCategory); // Crear categoría
router.get('/categories', categoryController.getAllCategories); // Obtener todas las categorías
router.get('/categories/:name', categoryController.getCategoryByName); // Obtener categoría por nombre

module.exports = router;
