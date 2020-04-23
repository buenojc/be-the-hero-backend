const knex = require("knex");
const configure = require("../../knexfile");

const config =
  process.env.NODE_ENV === "test" ? configure.test : configure.development;

const connection = knex(config);

module.exports = connection;
