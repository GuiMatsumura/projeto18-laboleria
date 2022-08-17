import connection from '../dbStrategy/postegres.js';

function cakeExist(cakeName) {
  return connection.query('SELECT * FROM cakes WHERE cakes.name = $1', [
    cakeName,
  ]);
}

function cakeInsert(cake) {
  return connection.query(
    'INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)',
    [cake.name, cake.price, cake.image, cake.description]
  );
}

export default { cakeExist, cakeInsert };
