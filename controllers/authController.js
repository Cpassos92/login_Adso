const bcrypt = require('bcrypt');
const ModelUser = require('../models/User');

// Registro de nuevo usuario
exports.register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new ModelUser({ username: req.body.username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar usuario', error: error.message });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    try {
        const user = await ModelUser.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });

        res.json({ message: 'Autenticación satisfactoria' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la autenticación', error: error.message });
    }
};

// Consultar todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await ModelUser.find(); // Obtiene todos los usuarios
        res.json(users); // Devuelve los usuarios en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
    }
};

// Buscar usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const user = await ModelUser.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar usuario', error: error.message });
    }
};


// Modificar usuario
exports.updateUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        
        const updatedUser = await ModelUser.findByIdAndUpdate(
            req.params.id,
            { username, password: hashedPassword },
            { new: true }
        );

        if (!updatedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json({ message: 'Usuario actualizado', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
    }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await ModelUser.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
    }
};
