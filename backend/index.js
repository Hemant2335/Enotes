const connecttomongo = require('./db');
connecttomongo();

const express = require('express')
const app = express()
const port = 5000

app.use(express.json()) // if we want to use the request body and print the json object in console 


//Available Routes 
app.use('/api/v1/auth' , require('./routes/auth'));
app.use('/api/v1/auth' , require('./routes/notes'));

app.listen(port, () => {
  console.log(`Enotes app backend listening on port ${port}`)
})

