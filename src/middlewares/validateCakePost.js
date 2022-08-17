import cakeSchema from '../schemas/cakeSchema.js';
import cakeRepository from '../repositories/cakeRepository.js';

export async function validateCakePost(req, res, next) {
  const cake = req.body;
  const { error } = cakeSchema.validate(cake);
  if (error) {
    console.log(error.details);
    return res.sendStatus(400);
  }
  try {
    const { rows: cakeExist } = await cakeRepository.cakeExist(cake.name);
    if (cakeExist.length > 0) {
      return res.sendStatus(409);
    }
  } catch (err) {
    res.status(500).send(err);
  }

  next();
}
