const request = require('supertest');
const app = require('../server'); 

let id = 0;
describe('API Endpoints', () => {
  it('should connect to the database', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Database connection successful!');
  });

  it('should fetch burritos', async () => {
    const response = await request(app).get('/api/burrito');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create an order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        items: [
          { burrito_id: 1, quantity: 2 },
          // Add more items as needed
        ],
      });
    expect(response.status).toBe(200);
    id = response.body.id
    // Add more assertions as needed
  });

  
  it('should fetch order details', async () => {
    const response = await request(app).get(`/api/orders/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.total_cost).toBeDefined();
    expect(response.body.order_items).toBeDefined();
    // Add more assertions as needed
  });

});
