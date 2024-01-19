const OrderItem = require('./orderItem');
const Burrito = require('./burrito');
const Order = require('./orders');

OrderItem.belongsTo(Burrito, { foreignKey: 'burrito_id', targetKey: 'id' });
Burrito.hasMany(OrderItem, { foreignKey: 'burrito_id' });

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasMany(OrderItem, { foreignKey: 'order_id' });

module.exports = {
  OrderItem,
  Burrito,
  Order,
};
