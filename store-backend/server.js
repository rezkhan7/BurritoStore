const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database/Database')
const Burrito = require('./models/burrito')

const app = express()
const PORT = 3001

app.use(bodyParser.json())

app.get('/', (req, res) => { // Here for testing purposes
    res.json({ message: 'Hello, World!' });
});

app.get('/api/burrito', async (req, res) => {
    try {
      const burritos = await Burrito.findAll();
      res.json(burritos);
    } catch (error) {
      console.error('Error fetching burritos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})