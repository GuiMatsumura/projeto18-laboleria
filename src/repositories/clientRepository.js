import connection from '../dbStrategy/postegres.js';

function clientInsert(client) {
  return connection.query(
    'INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);',
    [client.name, client.address, client.phone]
  );
}

function clientExist(id) {
  return connection.query(`SELECT * FROM clients WHERE id = $1`, [id]);
}

function clientOrder(id) {
  return connection.query(
    `SELECT orders.id AS "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes.name AS "cakeName" FROM orders JOIN cakes ON cakes.id = orders."cakeId" WHERE orders."clientId" = $1`,
    [id]
  );
}

export default { clientInsert, clientExist, clientOrder };
