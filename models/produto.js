const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Cria um Schema
const produtoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: String,
    valor: {
        type: Number,
        required: true
    }
})

module.exports = Produto = mongoose.model('produto', produtoSchema)