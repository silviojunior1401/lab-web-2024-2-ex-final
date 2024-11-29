const produtoBusiness = require("./produto-business");

const getProdutos = async (request, h) => {
	const filters = { ...request.query };

	try {
		const produtos = await produtoBusiness.list(filters);
		return h.response(produtos).code(200);
	} catch (error) {
		return h.response({ error: error.message }).code(400);
	}
};

const produtoById = async (request, h) => {
	const { id } = request.params;

	try {
		const produto = await produtoBusiness.findById(id);
		return h.response(produto);
	} catch (error) {
		return h.response({ error: error.message }).code(404);
	}
};

const createProduto = async (request, h) => {
	try {
		const produto = await produtoBusiness.save(request.payload);
		return h.response(produto).code(201);
	} catch (error) {
		return h.response({ error: error.message }).code(400);
	}
};

const updateProduto = async (request, h) => {
	const { id } = request.params;

	try {
		const produto = await produtoBusiness.update(id, request.payload);
		return h.response(produto).code(200);
	} catch (error) {
		return h.response({ error: error.message }).code(404);
	}
};

const removeProduto = async (request, h) => {
	const { id } = request.params;

	try {
		await produtoBusiness.remove(id);
		return h
			.response({ message: "Product successfully removed" })
			.code(200);
	} catch (error) {
		return h.response({ error: error.message }).code(404);
	}
};

module.exports = {
	getProdutos,
	produtoById,
	createProduto,
	updateProduto,
	removeProduto,
};
