import type { Request, Response } from "express";
import { Matricula } from "../models/index.ts";

export async function listar(_req: Request, res: Response) {
  try {
    const matriculas = await Matricula.findAll();
    res.json(matriculas);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar matriculas" });
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function buscarPorId(req: Request, res: Response) {
  const id = Number(req.params.id);

  try {
    const matriculaId = await Matricula.findByPk(id);

    if (!matriculaId) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.status(200).json(matriculaId);
  } catch (err) {
    console.log("ERROR" + (err as Error).message);
  }
}

export async function criar(req: Request, res: Response) {
  try {
    const { aluno_id, curso_id } = (req as Request).body;
    const novoMatricula = await Matricula.create({
      aluno_id: aluno_id,
      curso_id: curso_id,
    });

    res.status(201).json(novoMatricula);
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function excluir(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const matricula = await Matricula.destroy({ where: { id: id } });

    if (matricula > 0) {
      res.json({ mensagem: "Aluno removido com sucesso" });
    } else {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}
