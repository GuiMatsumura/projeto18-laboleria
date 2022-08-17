import orderSchema from '../schemas/orderSchema.js';
import orderRepository from '../repositories/orderRepository.js';

export async function validateOrderPost(req, res, next) {
  const order = req.body;
  const { error } = orderSchema.validate(order);
  if (error) {
    return res.sendStatus(400);
  }
  try {
    const { rows: clientIdExist } = await orderRepository.clientIdExist(order);
    if (clientIdExist.length === 0) {
      return res.sendStatus(404);
    }
    const { rows: cakeIdExist } = await orderRepository.cakeIdExist(order);
    if (cakeIdExist.length === 0) {
      return res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send(err);
  }
  next();
}
