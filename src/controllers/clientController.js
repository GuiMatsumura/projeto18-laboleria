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

export async function getClientsOrders(req, res) {
  const { id } = req.params;
  try {
    const { rows: orders } = await clientRepository.clientOrder(id);
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
}
