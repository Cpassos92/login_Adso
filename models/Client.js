// models/Client.js
const mongoose = require('mongoose');

// Definir el esquema del cliente
const clientSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    direccion: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});

const Client = mongoose.model('clientes', clientSchema);

module.exports = Client;
