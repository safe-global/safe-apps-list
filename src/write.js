const config = require('dotenv').config()
const buildList = require('./buildList')
console.log(JSON.stringify(buildList(), null, 2))