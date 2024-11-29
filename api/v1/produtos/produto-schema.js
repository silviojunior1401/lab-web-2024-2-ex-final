const Joi = require("@hapi/joi");

const produtoSchema = {
	payload: Joi.object({
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
		status: Joi.string().valid("ATIVO", "INATIVO"),
		dataCadastro: Joi.date(),
	}),
};

const findByIdIdSchema = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

const listProdutosSchema = {
    query: Joi.object({
        nome: Joi.string(),
        categoria: Joi.string(),
    }),
};

module.exports = {
	produtoSchema,
    findByIdIdSchema,
    listProdutosSchema,
};
