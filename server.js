const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000;

const db = require('./config/keys').mongoURI

app.use(bodyParser.json())

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Conectado'))
  .catch(erro => console.log(erro))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})