// models/Sale.js
const mongoose = require('mongoose');

// Definir el esquema de venta
const saleSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'clientes', required: true }, // Referencia al cliente
    date: { type: Date, default: Date.now },
    totalAmount: { type: Number, required: true },
    products: [{ // Detalles de la venta
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'productos', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
    }],
}, {
    timestamps: true,
    versionKey: false,
});

const Sale = mongoose.model('ventas', saleSchema);

module.exports = Sale;
