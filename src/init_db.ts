import * as fs from "fs";
import * as path from "path";
import { QueryTypes } from "sequelize";
import sequelize from "./config/config.ts";

export async function initDatabase() {
  try {
    const escolaCreateScript = fs.readFileSync(
      path.join("./src/migrations/", "escola_create.sql"),
      "utf8",
    );

    const escolaSeedScript = fs.readFileSync(
      path.join("./src/migrations/", "escola_seed.sql"),
      "utf8",
    );

    sequelize.authenticate();
    console.log("Conectado a base de dados");

    await sequelize.query(escolaCreateScript, { type: QueryTypes.UPDATE });
    console.log("Base de dados escola criada");

    await sequelize.query(escolaSeedScript, { type: QueryTypes.INSERT });
    console.log("Base de dados escola inicializada (dados teste adicionados)");
  } catch (err) {
    console.log("Erro ao iniciar o banco de dados: ", (err as Error).message);
  }
}
