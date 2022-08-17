import clientRepository from '../repositories/clientRepository.js';

export async function newClient(req, res) {
  const client = req.body;
  try {
    await clientRepository.clientInsert(client);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}
