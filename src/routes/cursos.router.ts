import { Router } from "express";
import * as controller from "../controllers/cursosController.ts";

const routerCursos = Router();

routerCursos.get("/", controller.listar);
routerCursos.get("/:id", controller.buscarPorId);
routerCursos.post("/", controller.criar);
routerCursos.put("/:id", controller.atualizar);
routerCursos.delete("/:id", controller.excluir);

export default routerCursos;
