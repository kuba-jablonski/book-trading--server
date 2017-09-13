const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/book-trading')

const app = express()

app.use(bodyParser.json())

app.use('/users', require('./routes/users'))

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up on port ${port}!`))