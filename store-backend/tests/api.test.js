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

  it('should have an array size of 30 on /api/burrito', async () => {
    const response = await request(app).get('/api/burrito');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(30);
  });

  it('should create an order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        items: [
          { burrito_id: 1, quantity: 2 },
          { burrito_id: 2, quantity: 2 }, 
          { burrito_id: 7, quantity: 8 },
        ],
      });
    expect(response.status).toBe(200);
    expect(response.body.total_cost).toBe("34.00")
    // total cost of 2 burrito ones 2 burrito twos and 8 burrito sevens should be 34 dollars
    id = response.body.id
  });

  it('should handle negative quantity in order creation', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        items: [
          { burrito_id: 1, quantity: -1 }, // Negative quantity
        ],
      });
    expect(response.status).toBe(400); 
    expect(response.body.error).toBe('Quantity cannot be negative');
  });

  it('should handle the case if a burrito id that does not exist in our database is provided', async ()=>{
    const response = await request(app)
        .post('/api/orders')
        .send({
            items: [
              { burrito_id: 41, quantity: 2 }, 
            ],
          });
        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Burrito with id 41 not found')
  });
  
  it('should fetch order details', async () => {
    const response = await request(app).get(`/api/orders/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.total_cost).toBeDefined();
    expect(response.body.order_items).toBeDefined();
  });

});
