import { Router } from "express";
import * as controller from "../controllers/matriculasController.ts";

const routerMatriculas = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Matricula:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da matrícula
 *         aluno_id:
 *           type: integer
 *           description: ID do aluno matriculado
 *         curso_id:
 *           type: integer
 *           description: ID do curso da matrícula
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Data de criação da matrícula
 *         deleted_at:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Data de exclusão (soft delete)
 *       example:
 *         id: 1
 *         aluno_id: 5
 *         curso_id: 3
 *         created_at: "2024-01-15T10:30:00Z"
 *         deleted_at: null
 *
 *     MatriculaInput:
 *       type: object
 *       required:
 *         - aluno_id
 *         - curso_id
 *       properties:
 *         aluno_id:
 *           type: integer
 *           description: ID do aluno a ser matriculado
 *           minimum: 1
 *         curso_id:
 *           type: integer
 *           description: ID do curso para matrícula
 *           minimum: 1
 *       example:
 *         aluno_id: 5
 *         curso_id: 3
 *
 *     MatriculaError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Mensagem de erro
 *       example:
 *         error: "Matrícula não encontrada"
 *
 *     MatriculaSuccessMessage:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *           description: Mensagem de sucesso
 *       example:
 *         mensagem: "Matrícula removida com sucesso"
 *
 *   tags:
 *     - name: Matriculas
 *       description: Gerenciamento de matrículas de alunos em cursos
 */

// Endpoints

/**
 * @swagger
 * /matriculas:
 *   get:
 *     summary: Lista todas as matrículas
 *     description: Retorna uma lista com todas as matrículas cadastradas no sistema
 *     tags: [Matriculas]
 *     responses:
 *       200:
 *         description: Lista de matrículas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Matricula'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaError'
 *             example:
 *               error: "Erro ao listar matrículas"
 */
routerMatriculas.get("/", controller.listar);

/**
 * @swagger
 * /matriculas/{id}:
 *   get:
 *     summary: Busca uma matrícula por ID
 *     description: Retorna os dados de uma matrícula específica através do seu ID
 *     tags: [Matriculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico da matrícula
 *         example: 1
 *     responses:
 *       200:
 *         description: Matrícula encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Matricula'
 *       404:
 *         description: Matrícula não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaError'
 *             example:
 *               error: "Matrícula não encontrada"
 *       500:
 *         description: Erro interno do servidor
 */
routerMatriculas.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /matriculas:
 *   post:
 *     summary: Cria uma nova matrícula
 *     description: Cadastra uma nova matrícula vinculando um aluno a um curso
 *     tags: [Matriculas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MatriculaInput'
 *     responses:
 *       201:
 *         description: Matrícula criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Matricula'
 *       400:
 *         description: Dados inválidos, aluno ou curso não existem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaError'
 *       500:
 *         description: Erro interno do servidor
 */
routerMatriculas.post("/", controller.criar);

/**
 * @swagger
 * /matriculas/{id}:
 *   delete:
 *     summary: Remove uma matrícula
 *     description: Realiza a exclusão lógica (soft delete) de uma matrícula através do seu ID
 *     tags: [Matriculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico da matrícula
 *         example: 1
 *     responses:
 *       200:
 *         description: Matrícula removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaSuccessMessage'
 *             example:
 *               mensagem: "Matrícula removida com sucesso"
 *       404:
 *         description: Matrícula não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MatriculaError'
 *             example:
 *               error: "Matrícula não encontrada"
 *       500:
 *         description: Erro interno do servidor
 */
routerMatriculas.delete("/:id", controller.excluir);

export default routerMatriculas;
