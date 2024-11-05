// routes/sale.js
const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

// Rutas de ventas
router.post('/sales', saleController.createSale); // Crear venta
router.get('/sales', saleController.getAllSales); // Obtener todas las ventas
router.get('/sales/:id', saleController.getSaleById); // Obtener venta por ID
router.put('/sales/:id', saleController.updateSale); // Actualizar venta
router.delete('/sales/:id', saleController.deleteSale); // Eliminar venta

module.exports = router;
