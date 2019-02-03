const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const produtos = require('./routes/produtos')

const app = express()// Bodyparser Middleware
app.use(bodyParser.json())
const port = process.env.PORT || 5000;

app.use('/api/produtos', produtos)

// Configura DB
const db = require('./config/keys').mongoURI

// Conexão com o MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Conectado'))
  .catch(erro => console.log(erro))

// Lança servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})