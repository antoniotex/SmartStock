import express from 'express'

const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})