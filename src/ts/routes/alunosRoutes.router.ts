import * as express from "express";
import * as controller from "../controllers/alunosController.ts";

export const router = express.Router();

//Endpoints
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.excluir);
