import Joi from 'joi';

const validateProduct = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.base': '422|Name must be a string',
    'any.required': '400|Name is required',
    'string.empty': '422|Name must be longer than 2 characters',
    'string.min': '422|Name must be longer than 2 characters',
  }),
  amount: Joi
    .string()
    .min(2)
    .required()
    .messages({
      'any.required': '400|Amount is required',
      'string.base': '422|Amount must be a string',
      'string.empty': '422|Amount must be longer than 2 characters',
      'string.min': '422|Amount must be longer than 2 characters',
    }),
});

export default validateProduct;