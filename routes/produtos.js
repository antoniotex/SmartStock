const express = require('express')
const router = express.Router()

// Modelo de Produto
const Produto = require('../models/produto')

// @route GET api/produtos
// @desc Obtém lista de produtos
// @access Public
router.get('/', (req, res) => {
    Produto.find()
      .then(items => res.json(items))
})

// @route POST api/produtos
// @desc  Adiciona um produto
// @access Public
router.post('/', (req, res) => {
    console.log('body', req.body)
    const newProduto = new Produto({
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor
    })
    newProduto.save().then(item => res.json(item))
})

module.exports = router