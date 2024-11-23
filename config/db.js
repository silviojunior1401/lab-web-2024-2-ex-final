const Sequelize = require("sequelize");
const envConfig = require("./envs-config");

const sequelizeConfig = {
    dialect: "postgres",
    port: envConfig.database.port,
    host: envConfig.database.host,
    logging: console.log,
};

//database, usuário e senha
const sequelize = new Sequelize(
    envConfig.database.database,
    envConfig.database.user,
    envConfig.database.password,
    sequelizeConfig
);

module.exports = { sequelize };
