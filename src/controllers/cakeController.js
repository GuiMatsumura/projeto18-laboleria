import connecion from '../dbStrategy/postegres.js';
import cakeRepository from '../repositories/cakeRepository.js';

export async function newCake(req, res) {
  const cake = req.body;
  try {
    await cakeRepository.cakeInsert(cake);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}
