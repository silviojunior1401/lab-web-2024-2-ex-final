const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Produto = database.sequelize.define(
	"produto",
	{
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		descricao: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		categoria: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		marca: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		preco: {
			type: Sequelize.DECIMAL(10, 2),
			allowNull: true,
		},
		quantidadeEstoque: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		codigoBarras: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		dimensoes: {
			type: Sequelize.JSONB,
			allowNull: true,
		},
		peso: {
			type: Sequelize.JSONB,
			allowNull: true,
		},
		status: {
			type: Sequelize.ENUM("ATIVO", "INATIVO"),
			defaultValue: "ATIVO",
		},
		dataCadastro: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		},
	},
	{
		tableName: "produto",
	}
);

module.exports = { Produto };
