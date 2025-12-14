import { ConnectionRefusedError, Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const [host, username, password, database, port] = [
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME,
  Number(process.env.DB_PORT),
];

const sequelize = new Sequelize({
  host: host || "localhost",
  dialect: "postgres",
  username: username || "escola",
  password: password || "escola",
  database: database || "escola",
  port: port || 3000,
  retry: {
    match: [ConnectionRefusedError],
    max: 5,
  },
});

export default sequelize;
