const { Produto: produtoModel } = require("./produto-model");
const { Op } = require("sequelize");

const save = async (produto) => {
	const savedProduto = await produtoModel.create(produto);

	return savedProduto;
};

const update = async (id, produto) => {
	const existingProduto = await produtoModel.findByPk(id);
	if (!existingProduto) {
		throw new Error("Product not found");
	}
	return await existingProduto.update(produto);
};

const remove = async (id) => {
	const produto = await produtoModel.findByPk(id);
	if (!produto) {
		throw new Error("Product not found");
	}
	return await produto.update({ status: "INATIVO" });
};

const findById = async (id) => {
	const produto = await produtoModel.findByPk(id);
	if (!produto) {
		throw new Error("Product not found");
	}
	return produto;
};

const list = async (filters) => {
	const where = {};

	if (filters.categoria) where.categoria = filters.categoria;
	if (filters.nome) where.nome = { [Op.iLike]: `%${filters.nome}%` };

	const produtos = await produtoModel.findAll({ where });

	return produtos;
};

module.exports = { save, update, remove, findById, list };
