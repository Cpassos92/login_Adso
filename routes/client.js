// routes/client.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rutas de clientes
router.post('/clients', clientController.createClient); // Crear cliente
router.get('/clients', clientController.getAllClients); // Obtener todos los clientes
router.get('/clients/:id', clientController.getClientById); // Obtener cliente por ID
router.put('/clients/:id', clientController.updateClient); // Actualizar cliente
router.delete('/clients/:id', clientController.deleteClient); // Eliminar cliente

module.exports = router;
