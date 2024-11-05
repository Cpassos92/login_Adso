const mongoose = require('mongoose');

// Esquema de usuario
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    
}, {
    timestamps: true,
    versionKey: false,
});

// Modelo de usuario
const ModelUser = mongoose.model('usuarios', userSchema);

module.exports = ModelUser;
