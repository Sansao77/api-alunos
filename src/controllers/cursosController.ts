import type { Request, Response } from "express";
import { Curso } from "../models/index.ts";

export async function listar(_req: Request, res: Response) {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar cursos" });
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function buscarPorId(req: Request, res: Response) {
  const id = Number(req.params.id);

  try {
    const cursoId = await Curso.findByPk(id);

    if (!cursoId) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    res.status(200).json(cursoId);
  } catch (err) {
    console.log("ERROR" + (err as Error).message);
  }
}

export async function criar(req: Request, res: Response) {
  try {
    const { nome, cargahoraria, modalidade } = (req as Request).body;
    const novoCurso = await Curso.create({
      nome: nome,
      cargaHoraria: cargahoraria,
      modalidade: modalidade,
    });

    res.status(201).json(novoCurso);
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { nome, cargahoraria, modalidade } = req.body;
    const CursoAtualizado = await Curso.findByPk(id);

    if (CursoAtualizado) {
      await CursoAtualizado.update({
        nome: nome,
        cargahoraria: cargahoraria,
        modalidade: modalidade,
      });
    } else {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    res.status(200).json({
      CursoAtualizado,
      mensagem: "Curso atualizado com sucesso",
    });
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}

export async function excluir(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const curso = await Curso.destroy({ where: { id: id } });

    if (curso > 0) {
      res.json({ mensagem: "Curso removido com sucesso" });
    } else {
      return res.status(404).json({ error: "Curso não encontrado" });
    }
  } catch (err) {
    console.error("ERROR: " + (err as Error).message);
  }
}
