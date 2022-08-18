import clientRepository from '../repositories/clientRepository.js';

export async function validateClientGet(req, res, next) {
  const { id } = req.params;
  try {
    const { rows: clientExist } = await clientRepository.clientExist(id);
    if (!clientExist.length) {
      return res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send(err);
  }
  next();
}
