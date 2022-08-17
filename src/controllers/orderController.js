import orderRepository from '../repositories/orderRepository.js';

export async function newOrder(req, res) {
  const order = req.body;
  try {
    await orderRepository.insertOrder(order);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}
