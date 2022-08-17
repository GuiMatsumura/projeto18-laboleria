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

export default { clientIdExist, cakeIdExist, insertOrder };
