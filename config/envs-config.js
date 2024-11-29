"use strict";

const dotenv = require("dotenv").config();

// All configurations will extend these options
// ============================================

const all = {
	basePath: "/cms/v1",

	env: process.env.ENVIRONMENT,
	host: process.env.HOST || "0.0.0.0",
	port: process.env.PORT || 5000,

	database: {
		host: process.env.DATABASE_HOST || "localhost",
		port: process.env.DATABASE_PORT || 5432,
		user: process.env.DATABASE_USER || "postgres",
		password: process.env.DATABASE_PASSWORD || "postgres",
		database: process.env.DATABASE_NAME || "cms",
		pool: {
			min: 2,
			max: 10,
		},
		dialect: process.env.DATABASE_DIALECT || "postgres",
	},
};

module.exports = all;
