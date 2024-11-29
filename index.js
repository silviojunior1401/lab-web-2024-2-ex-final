const server = require("./server");

(async () => {
	await server.start();
	console.log("Server listening on %s", server.info.uri);
})();
