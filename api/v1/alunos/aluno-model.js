const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Aluno = database.sequelize.define(
    "aluno",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
            field: "cod_aluno",
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
            field: "nome",
        },
        idade: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: "idade",
        },
    },
    {
        tableName: "aluno",
        timestamps: false, // remove os campos de data de criacao e atualizacao
    }
);

module.exports = { Aluno };
