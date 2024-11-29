const Joi = require("joi");

const produtoSchema = Joi.object({
	id: Joi.string().required(),
	nome: Joi.string().required(),
	descricao: Joi.string(),
	categoria: Joi.string(),
	marca: Joi.string(),
	preco: Joi.number().precision(2).positive(),
	quantidadeEstoque: Joi.number().integer().min(0),
	codigoBarras: Joi.string(),
	dimensoes: Joi.object({
		altura: Joi.number().positive(),
		largura: Joi.number().positive(),
		profundidade: Joi.number().positive(),
		unidadeMedida: Joi.string(),
	}),
	peso: Joi.object({
		valor: Joi.number().positive(),
		unidadeMedida: Joi.string(),
	}),
	status: Joi.string().valid("ativo", "inativo"),
	dataCadastro: Joi.date(),
});

const produtoQuerySchema = Joi.object({
	categoria: Joi.string(),
	nome: Joi.string(),
});

const produtoIdSchema = Joi.object({
	id: Joi.string().required(),
});

module.exports = {
	produtoSchema,
	produtoQuerySchema,
	produtoIdSchema,
};
