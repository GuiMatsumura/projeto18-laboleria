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

export async function getOrders(req, res) {
  const { date } = req.query;
  try {
    const { rows: posts } = await orderRepository.getAllOrders();
    if (posts.length === 0) {
      return res.status(404).send(posts);
    }
    if (!date) {
      return res.status(200).send(posts);
    }
    const { rows: dailyOrders } = await orderRepository.getDailyOrders(date);
    if (dailyOrders.length === 0) {
      return res.status(404).send(dailyOrders);
    }
    res.status(200).send(dailyOrders);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getOrdersId(req, res) {
  const { id } = req.params;
  try {
    const { rows: postId } = await orderRepository.getIdOrder(id);
    if (postId.length === 0) {
      return res.sendStatus(404);
    }
    res.status(200).send(postId);
  } catch (err) {
    res.status(500).send(err);
  }
}
