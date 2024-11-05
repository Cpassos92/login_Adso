// controllers/clientController.js
const Client = require('../models/Client');

// Crear un nuevo cliente
exports.createClient = async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).json({ message: 'Cliente registrado exitosamente', client });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar cliente', error: error.message });
    }
};

// Consultar todos los clientes
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes', error: error.message });
    }
};

// Consultar cliente por ID
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar cliente', error: error.message });
    }
};

// Actualizar cliente
exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClient) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json({ message: 'Cliente actualizado', client: updatedClient });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cliente', error: error.message });
    }
};

// Eliminar cliente
exports.deleteClient = async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (!deletedClient) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cliente', error: error.message });
    }
};
