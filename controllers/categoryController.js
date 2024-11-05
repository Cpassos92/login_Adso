// controllers/categoryController.js
const Category = require('../models/Category');

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json({ message: 'Categoría creada exitosamente', category });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear categoría', error: error.message });
    }
};

// Consultar todas las categorías
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error: error.message });
    }
};

// Consultar categoría por nombre
exports.getCategoryByName = async (req, res) => {
    try {
        const category = await Category.findOne({ name: req.params.name });
        if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar la categoría', error: error.message });
    }
};
