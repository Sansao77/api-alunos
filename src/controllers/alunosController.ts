import type { Request, Response } from "express";
import { Aluno } from "../models/index.ts";

export async function listar(_req: Request, res: Response) {
  try {
    const alunos = await Aluno.findAll();

    res.json(alunos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar alunos" });
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
    const { nome, email } = (req as Request).body;
    const novoAluno = await Aluno.create({
      nome,
      email,
    });

    res.status(201).json(novoAluno);
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { nome, email } = req.body;
    const alunoAtualizado = await Aluno.findByPk(id);

    if (alunoAtualizado) {
      await alunoAtualizado.update({
        nome,
        email,
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
