// controllers/supplierController.js
const Supplier = require('../models/Supplier');

// Crear un nuevo proveedor
exports.createSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.status(201).json({ message: 'Proveedor creado exitosamente', supplier });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear proveedor', error: error.message });
    }
};

// Consultar todos los proveedores
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proveedores', error: error.message });
    }
};

// Consultar proveedor por ID
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Proveedor no encontrado' });
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el proveedor', error: error.message });
    }
};

// Actualizar proveedor
exports.updateSupplier = async (req, res) => {
    try {
        const updatedSupplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSupplier) return res.status(404).json({ message: 'Proveedor no encontrado' });
        res.json({ message: 'Proveedor actualizado', supplier: updatedSupplier });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error: error.message });
    }
};

// Eliminar proveedor
exports.deleteSupplier = async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!deletedSupplier) return res.status(404).json({ message: 'Proveedor no encontrado' });
        res.json({ message: 'Proveedor eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error: error.message });
    }
};
