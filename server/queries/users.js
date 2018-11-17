
const Joi = require('joi');
const db = require('../db');

const Joi = require('joi');

const schema = Joi.object().keys({
	display_name: Joi.string().required(),
	email: Joi.string().email({ minDomainAtoms: 2 }),
	google_id: Joi.string().required(),
	banned: Joi.boolean().required(),
	image_url: Joi.string().uri({
		scheme: [
			/https/
		]
	}),
	role_id: Joi.number().integer()
});

module.exports = {
  findByEmail(email) {
		return db('users').where('email', email).first();	
	},
	insert(user) {
		return db('users').insert(user);
	}
};