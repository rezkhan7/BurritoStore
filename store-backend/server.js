const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database/Database')
const Burrito = require('./models/burrito')
const Order = require('./models/orders')
const OrderItem = require('./models/orderItem')
require('./models')

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

app.post('/api/orders', async (req, res) =>{
    try{
        const { items } = req.body;

        let totalCost = 0;
        const orderItems = [];

        for(const item of items){
            const { burrito_id, quantity } = item;

            if (quantity < 0) {
                return res.status(400).json({ error: 'Quantity cannot be negative' });
            }

            const burrito = await Burrito.findByPk(burrito_id);

            if(!burrito){
                return res.status(404).json({ error: `Burrito with id ${burrito_id} not found` });
            }

            const itemCost = (burrito.price * quantity).toFixed(2);
            totalCost += parseFloat(itemCost);

            //Adds orderItem to an array
            orderItems.push({ burrito_id, quantity, itemCost });
        }
        
        totalCost = totalCost.toFixed(2);
        const order = await Order.create({total_cost: totalCost});

        for(const item of orderItems){
            await OrderItem.create({ order_id: order.id, ...item});
        }
        res.json(order);
    }catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
  
app.get('/api/orders/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
      const order = await Order.findByPk(orderId, { include: OrderItem });
      res.json(order);
    } catch (error) {
      console.error('Error fetching order details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  //Endpoint for DELETE
  app.delete('/api/orders/:id', async (req, res) => {
    try {
      const orderId = req.params.id;
      const order = await Order.findByPk(orderId);
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      await OrderItem.destroy({ where: { order_id: orderId } });
  
      await order.destroy();
  
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = app;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });