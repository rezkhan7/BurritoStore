# BurritoStore Backend

This is the backend for BurritoStore, a simple application for managing burritos and orders.

## Table of Contents

- [Getting Started](#getting-started)
- [Testing](#testing)

## Getting Started

These instructions will help you set up and run the BurritoStore backend on your local machine.
1. Ensure you have docker set up in your local machine
2. Clone repo
3. Go inside the store-backend directory (cd store-backend)
4. Run:
   ```
    docker-compose up --build
   ```
5. Wait for docker to do its magic, and Keep an eye on Jest Test Results as the Dockerfile automatically does npm test as soon Postgres and Express environments are built.


## Testing

1. IF NEEDED go to Dockerfile and change last line from CMD ["npm", "test"] to CMD ["npm", "start"]
2. Use Postman to test API ednpoints


In Postman, you can follow these steps to send a POST request to your /api/orders endpoint:

  1. Open Postman.

  2. Set the request type to "POST" using the dropdown next to the URL input.

  3. Enter the URL: http://localhost:3001/api/orders

  4. Go to the "Headers" tab and add a header:
        Key: Content-Type
        Value: application/json
     Remember to check the box next to key

  6. Switch to the "Body" tab, select the "raw" option, and choose JSON (application/json) from the dropdown.

  7. In the body section, enter the JSON payload for your request. For example:

  ```
  {
    "items": [
      {
        "burrito_id": 1,
        "quantity": 2
      },
      {
        "burrito_id": 2,
        "quantity": 1
      }
    ]
}

  ```
8. Do a get request on postman for http://localhost:3001/api/orders/<ID OF ORDER> for more details

9. DO A GET REQUEST ON POSTMAN FOR http://localhost:3001/api/burrito FOR A LIST OF BURRITOS, THEIR CORRESPONDING IDs AND THEIR COST.


