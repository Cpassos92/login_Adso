// routes/supplier.js
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Rutas de proveedores
router.post('/suppliers', supplierController.createSupplier); // Crear proveedor
router.get('/suppliers', supplierController.getAllSuppliers); // Obtener todos los proveedores
router.get('/suppliers/:id', supplierController.getSupplierById); // Obtener proveedor por ID
router.put('/suppliers/:id', supplierController.updateSupplier); // Actualizar proveedor
router.delete('/suppliers/:id', supplierController.deleteSupplier); // Eliminar proveedor

module.exports = router;
