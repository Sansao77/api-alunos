import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "escola",
  password: "escola",
  database: "escola",
});

export default sequelize;
