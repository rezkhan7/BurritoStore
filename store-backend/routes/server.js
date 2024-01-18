const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3001

app.use(bodyParser.json())

app.get('/', (req, res) => { // Here for testing purposes
    res.json({ message: 'Hello, World!' });
});


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})