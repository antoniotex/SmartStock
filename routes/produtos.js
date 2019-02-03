const express = require('express')
const router = express.Router()

// Modelo de Produto
const Produto = require('../models/produto')

// @route GET api/items
// @desc GET All Items
// @access Public
router.get('/', (req, res) => {
    Produto.find()
      .then(items => res.json(items))
})

module.exports = router