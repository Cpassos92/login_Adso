// models/Category.js
const mongoose = require('mongoose');

// Definir el esquema de la categoría
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Nombre único para cada categoría
    description: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});

const Category = mongoose.model('categorias', categorySchema);

module.exports = Category;
