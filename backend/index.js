const ConnectToMongo = require("./db");
const express = require('express')
var cors = require('cors') 


ConnectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
// Available Routes


app.listen(port, () => {
  console.log(`Mystic Routes Backend listening on port ${port}`)
})

