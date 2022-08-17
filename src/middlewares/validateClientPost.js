import clientSchema from '../schemas/clientSchema.js';

export async function validateClientPost(req, res, next) {
  const client = req.body;
  const { error } = clientSchema.validate(client);
  if (error) {
    console.log(error.details);
    return res.sendStatus(400);
  }
  next();
}
