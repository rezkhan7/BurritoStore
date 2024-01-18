const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database/Database')
const Burrito = require('./models/burrito')

const app = express()
const PORT = 3001

app.use(bodyParser.json())

// Test Route
app.get('/', async (req, res) => {
    try {
      await sequelize.authenticate();
      res.json({ message: 'Database connection successful!' });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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


  app.listen(PORT, async () => {
    try {
      await sequelize.sync(); // Sync the models with the database
      console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
      console.error('Error syncing database models:', error);
    }
  });