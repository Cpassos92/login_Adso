// controllers/saleController.js
const Sale = require('../models/Sale');
const Product = require('../models/Product');

// Crear una nueva venta
exports.createSale = async (req, res) => {
    try {
        const { products, customer } = req.body;

        // Verificar que los productos existan y calcular el total
        const saleProducts = [];
        let calculatedTotal = 0;

        for (const item of products) {
            const product = await Product.findById(item.product);
            if (product) {
                if (product.stock < item.quantity) {
                    return res.status(400).json({ message: `Stock insuficiente para el producto: ${product.name}` });
                }

                // Calcular el precio total por producto
                const itemTotal = product.precioVenta * item.quantity;
                calculatedTotal += itemTotal; // Sumar al total calculado

                // Agregar el producto a la lista de venta
                saleProducts.push({
                    product: item.product,
                    quantity: item.quantity,
                    price: product.precioVenta // Obtener el precio automáticamente
                });

                // Reducir el stock
                product.stock -= item.quantity;
                await product.save(); // Guardar cambios en el stock
            } else {
                return res.status(404).json({ message: `Producto no encontrado: ${item.product}` });
            }
        }

        // Crear la venta
        const sale = new Sale({ customer, totalAmount: calculatedTotal, products: saleProducts });
        await sale.save();

        res.status(201).json({ message: 'Venta creada exitosamente', sale });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear venta', error: error.message });
    }
};

// Consultar todas las ventas
exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find().populate('customer').populate('products.product');
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las ventas', error: error.message });
    }
};

// Consultar venta por ID
exports.getSaleById = async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id).populate('customer').populate('products.product');
        if (!sale) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json(sale);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar la venta', error: error.message });
    }
};

// Actualizar venta
exports.updateSale = async (req, res) => {
    try {
        const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSale) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json({ message: 'Venta actualizada', sale: updatedSale });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la venta', error: error.message });
    }
};

// Eliminar venta
exports.deleteSale = async (req, res) => {
    try {
        const deletedSale = await Sale.findByIdAndDelete(req.params.id);
        if (!deletedSale) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json({ message: 'Venta eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la venta', error: error.message });
    }
};
