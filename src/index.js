const studentController = require('./Controllers/student.js');
const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/student', studentController)

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})