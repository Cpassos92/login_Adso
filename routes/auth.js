const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registro
router.post('/register', authController.register);

// Ruta para inicio de sesión
router.post('/login', authController.login);

// Consultar todos los usuarios
router.get('/users', authController.getAllUsers);


// Ruta para buscar usuario por ID
router.get('/user/:id', authController.getUserById);

// Ruta para modificar usuario
router.put('/user/:id', authController.updateUser);

// Ruta para eliminar usuario
router.delete('/user/:id', authController.deleteUser);

module.exports = router;
