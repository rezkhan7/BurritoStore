-- Create schemas
CREATE TABLE burrito (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  size VARCHAR,
  price NUMERIC
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  total_cost NUMERIC
);

CREATE TABLE order_item (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  burrito_id INTEGER REFERENCES burrito(id),
  quantity INTEGER
);

-- Insert statements for burritos
INSERT INTO burrito (name, size, price) VALUES ('Chicken Burrito', 'Mini', 3.00);
INSERT INTO burrito (name, size, price) VALUES ('Chicken Burrito', 'Regular', 4.00);
INSERT INTO burrito (name, size, price) VALUES ('Chicken Burrito', 'Large', 5.00);

INSERT INTO burrito (name, size, price) VALUES ('Beef Burrito', 'Mini', 3.50);
INSERT INTO burrito (name, size, price) VALUES ('Beef Burrito', 'Regular', 4.75);
INSERT INTO burrito (name, size, price) VALUES ('Beef Burrito', 'Large', 6.00);

INSERT INTO burrito (name, size, price) VALUES ('Mexican Burrito', 'Mini', 2.50);
INSERT INTO burrito (name, size, price) VALUES ('Mexican Burrito', 'Regular', 3.75);
INSERT INTO burrito (name, size, price) VALUES ('Mexican Burrito', 'Large', 4.50);

INSERT INTO burrito (name, size, price) VALUES ('Bean and Cheese Burrito', 'Mini', 2.50);
INSERT INTO burrito (name, size, price) VALUES ('Bean and Cheese Burrito', 'Regular', 3.75);
INSERT INTO burrito (name, size, price) VALUES ('Bean and Cheese Burrito', 'Large', 4.50);

INSERT INTO burrito (name, size, price) VALUES ('LA-Style Burrito', 'Mini', 2.50);
INSERT INTO burrito (name, size, price) VALUES ('LA-Style Burrito', 'Regular', 3.75);
INSERT INTO burrito (name, size, price) VALUES ('LA-Style Burrito', 'Large', 4.50);

INSERT INTO burrito (name, size, price) VALUES ('Breakfast Burrito', 'Mini', 2.75);
INSERT INTO burrito (name, size, price) VALUES ('Breakfast Burrito', 'Regular', 3.50);
INSERT INTO burrito (name, size, price) VALUES ('Breakfast Burrito', 'Large', 4.25);

INSERT INTO burrito (name, size, price) VALUES ('Breakfast Burrito', 'Mini', 2.75);
INSERT INTO burrito (name, size, price) VALUES ('Breakfast Burrito', 'Regular', 3.50);
INSERT INTO burrito (name, size, price) VALUES ('Breakfast Burrito', 'Large', 4.25);

INSERT INTO burrito (name, size, price) VALUES ('Dorado Style', 'Mini', 3.25);
INSERT INTO burrito (name, size, price) VALUES ('Dorado Style', 'Regular', 4.00);
INSERT INTO burrito (name, size, price) VALUES ('Dorado Style', 'Large', 4.75);

INSERT INTO burrito (name, size, price) VALUES ('San Francisco Style', 'Mini', 4.00);
INSERT INTO burrito (name, size, price) VALUES ('San Francisco Style', 'Regular', 5.00);
INSERT INTO burrito (name, size, price) VALUES ('San Francisco Style', 'Large', 6.00);

INSERT INTO burrito (name, size, price) VALUES ('Bacon-Wrapped Burrito', 'Mini', 3.50);
INSERT INTO burrito (name, size, price) VALUES ('Bacon-Wrapped Burrito', 'Regular', 4.25);
INSERT INTO burrito (name, size, price) VALUES ('Bacon-Wrapped Burrito', 'Large', 5.00);



