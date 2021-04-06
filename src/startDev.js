const cors = require('cors')
const config = require('dotenv').config()
const express = require('express')

const buildList = require('./buildList')

const app = express()
const port = process.env.PORT || '8080'
app.use(cors())

app.get('/', async (req, res) => {
  const list = await buildList()
  res.json(list)
});


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
});  