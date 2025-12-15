import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import type { Options } from "swagger-jsdoc";
import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

import routerAlunos from "./routes/alunos.router.ts";
import routerCursos from "./routes/cursos.router.ts";
import routerMatriculas from "./routes/matriculas.router.ts";
import * as init_db from "./init_db.ts";

const PORTA = Number(process.env.API_PORT) || 3000;

const app = express();

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Alunos",
      version: "1.0.0",
      description: "API para gerenciamento de alunos e cursos",
    },
  },
  apis: [
    "./src/routes/**/*.router.ts",
    "./src/controllers/**/*.ts",
    "./src/models/**/*.ts",
  ],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use("/alunos", routerAlunos);
app.use("/cursos", routerCursos);
app.use("/matriculas", routerMatriculas);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none; }",
    customSiteTitle: "API Alunos",
  }),
);

app.get("/", (_req, res) => {
  res.json(
    {
      message: "API Escola com Express está funcionando!",
    },
  );
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em porta: http://localhost:${PORTA}`);
  console.log(
    `Documentação e UI interativo disponível em porta: http://localhost:${PORTA}/api-docs`,
  );
});

init_db.initDatabase();
