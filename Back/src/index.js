import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/user'

const app = express()
const port = 3000

// bodyParser.json: pega o dado do BODY e transforma em .json
// .json: um forma ordenada de dados que transforma eles em OBJETO no JavaScript.
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('GET!')
})

app.use('/user', userController);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
