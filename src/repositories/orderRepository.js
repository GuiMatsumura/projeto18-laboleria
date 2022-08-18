import connection from '../dbStrategy/postegres.js';
import dayjs from 'dayjs';

function clientIdExist(order) {
  return connection.query('SELECT * FROM clients WHERE id = $1', [
    order.clientId,
  ]);
}

function cakeIdExist(order) {
  return connection.query('SELECT * FROM cakes WHERE id = $1', [order.cakeId]);
}

function insertOrder(order) {
  const now = dayjs().format('YYYY-MM-DD');
  return connection.query(
    'INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt", "totalPrice") VALUES ($1, $2, $3, $4, $5)',
    [order.clientId, order.cakeId, order.quantity, now, order.totalPrice]
  );
}

function getAllOrders() {
  return connection.query(
    `SELECT jsonb_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS client, jsonb_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS cake, orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice" FROM orders JOIN clients ON clients.id = orders."clientId" JOIN cakes ON cakes.id = orders."cakeId"`
  );
}

function getDailyOrders(date) {
  return connection.query(
    `SELECT jsonb_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS client, jsonb_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS cake, orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice" FROM orders JOIN clients ON clients.id = orders."clientId" JOIN cakes ON cakes.id = orders."cakeId" WHERE "createdAt" = $1`,
    [date]
  );
}

function getIdOrder(id) {
  return connection.query(
    `SELECT jsonb_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS client, jsonb_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS cake, orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice" FROM orders JOIN clients ON clients.id = orders."clientId" JOIN cakes ON cakes.id = orders."cakeId" WHERE orders.id = $1`,
    [id]
  );
}

export default {
  clientIdExist,
  cakeIdExist,
  insertOrder,
  getAllOrders,
  getDailyOrders,
  getIdOrder,
};
