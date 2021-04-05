const express = require('express')
const cors = require('cors')
const path = require('path')

const appList = require('./src/app-list.json')

const app = express()
const port = process.env.PORT || '8080'
app.use(cors())

app.get('/', (req, res) => {
  res.json(appList)
});


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
});  