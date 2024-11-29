const produtoController = require("./produto-controller");
const {
	produtoSchema,
	produtoQuerySchema,
	produtoIdSchema,
} = require("./produto-schema");

const baseVersion = "/v1";

const routes = [
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: {
                payload: produtoSchema,
            },
        },
    },
    {
        method: "PUT",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.updateProduto,
            validate: {
                params: produtoIdSchema,
                payload: produtoSchema,
            },
        },
    },
    {
        method: "DELETE",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.removeProduto,
            validate: {
                params: produtoIdSchema,
            },
        },
    },
	{
		method: "GET",
		path: `${baseVersion}/produtos`,
		options: {
			handler: produtoController.getProdutos,
			validate: {
				query: produtoQuerySchema,
			},
		},
	},
	{
		method: "GET",
		path: `${baseVersion}/produtos/{id}`,
		options: {
			handler: produtoController.produtoById,
			validate: {
				params: produtoIdSchema,
			},
		},
	},
];

module.exports = routes;
