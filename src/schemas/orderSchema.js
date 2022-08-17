import joi from 'joi';

const orderSchema = joi.object({
  clientId: joi.required(),
  cakeId: joi.required(),
  quantity: joi.number().integer().greater(0).less(5).required(),
  totalPrice: joi.number().positive().greater(0).required(),
});

export default orderSchema;
