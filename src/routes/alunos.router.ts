import { Router } from "express";
import * as controller from "../controllers/alunosController.ts";

const routerAlunos = Router();

//Endpoints
routerAlunos.get("/", controller.listar);
routerAlunos.get("/:id", controller.buscarPorId);
routerAlunos.post("/", controller.criar);
routerAlunos.put("/:id", controller.atualizar);
routerAlunos.delete("/:id", controller.excluir);

export default routerAlunos;
