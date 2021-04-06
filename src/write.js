const config = require('dotenv').config()
const buildList = require('./buildList.js');

(async () => {
  const list = await buildList().then(list => JSON.stringify(list, null, 2))
  console.log(list)
})()
