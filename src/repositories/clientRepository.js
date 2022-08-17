import connection from '../dbStrategy/postegres.js';

function clientInsert(client) {
  return connection.query(
    'INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);',
    [client.name, client.address, client.phone]
  );
}

export default { clientInsert };
