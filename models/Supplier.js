// models/Supplier.js
const mongoose = require('mongoose');

// Definir el esquema de proveedor
const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});

const Supplier = mongoose.model('proveedores', supplierSchema);

module.exports = Supplier;
