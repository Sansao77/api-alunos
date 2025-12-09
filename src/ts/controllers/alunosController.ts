import type { Request, Response } from "express";
import { Aluno } from "../models/index.ts";

export async function listar(req: Request, res: Response) {
  try {
    const alunos = await Aluno.findAll();

    res.json(alunos);
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function buscarPorId(req: Request, res: Response) {
  const id = Number(req.params.id);

  try {
    const alunoId = await Aluno.findByPk(id);

    if (!alunoId) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.status(200).json(alunoId);
  } catch (err) {
    console.log("ERROR" + (err as Error).message);
  }
}

export async function criar(req: Request, res: Response) {
  try {
    const { nome } = (req as Request).body;
    const novoAluno = await Aluno.create({
      nome,
    });

    res.status(201).json(novoAluno);
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { nome } = req.body;
    const alunoAtualizado = await Aluno.findByPk(id);

    if (alunoAtualizado) {
      await alunoAtualizado.update({
        nome,
      });
    } else {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.status(200).json({
      alunoAtualizado,
      mensagem: "Aluno atualizado com sucesso",
    });
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function excluir(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const aluno = await Aluno.destroy({ where: { id: id } });

    if (aluno > 0) {
      res.json({ mensagem: "Aluno removido com sucesso" });
    } else {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}
