const Joi = require("joi");

const createAlunoSchema = {
    payload: Joi.object({
        nome: Joi.string().min(2).required(),
        idade: Joi.number().integer().positive().max(150).required(),
    }),
};

const consultaPorIdSchema = {
    params: Joi.object({
        id: Joi.number().integer().positive().required(),
    }),
};

const consultarAlunosSchema = {
    query: Joi.object({
        nome: Joi.string().min(2).max(100),
        idade: Joi.number().integer().positive().max(150),
        status: Joi.string()
            .valid("ATIVO", "INATIVO", "SUSPENSO")
            .default("ATIVO"),
    }),
};

module.exports = {
    consultaPorIdSchema,
    createAlunoSchema,
    consultarAlunosSchema,
};
