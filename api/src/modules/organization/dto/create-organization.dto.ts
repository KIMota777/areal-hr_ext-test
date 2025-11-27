import Joi from 'joi';

export const createOrganizationSchema = Joi.object({
    name: Joi.string().max(255).required(),
    comment: Joi.string().optional().allow('', null)
});
