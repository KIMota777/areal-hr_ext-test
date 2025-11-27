import Joi from 'joi';

export const updateOrganizationSchema = Joi.object({
    name: Joi.string().max(255).optional(),
    comment: Joi.string().optional().allow('', null)
});
