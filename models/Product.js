// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Nombre del producto
    descripcion: { type: String },
    lot: { type: String },
    fechaVencimiento: { type: Date },
    imvima: { type: String },
    precioVenta: { type: Number, required: true }, // Precio de venta
    precioCompra: { type: Number, required: true }, // Precio de compra
    barcode: { type: String },
    stock: { type: Number, required: true, default: 0 },
    minStock: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: String, default: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categorias' } // Referencia a categorías
}, {
    timestamps: true,
    versionKey: false,
});

const Product = mongoose.model('productos', productSchema);

module.exports = Product;
