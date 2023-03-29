import * as Joi from 'joi';

export const emailSchema = Joi.string().email();

export const passwordSchema = Joi.string().min(6);
