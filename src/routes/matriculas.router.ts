import { Router } from "express";
import * as controller from "../controllers/matriculasController.ts";

const routerMatriculas = Router();

routerMatriculas.get("/", controller.listar);
routerMatriculas.get("/:id", controller.buscarPorId);
routerMatriculas.post("/", controller.criar);
routerMatriculas.delete("/:id", controller.excluir);

export default routerMatriculas;
