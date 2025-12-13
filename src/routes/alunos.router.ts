import { Router } from "express";
import * as controller from "../controllers/alunosController.ts";

const routerAlunos = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do aluno
 *         nome:
 *           type: string
 *           description: Nome completo do aluno
 *         email:
 *           type: string
 *           format: email
 *           description: Email único do aluno
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *         deleted_at:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Data de exclusão (soft delete)
 *       example:
 *         id: 1
 *         nome: "João Silva"
 *         email: "joao.silva@example.com"
 *         created_at: "2024-01-15T10:30:00Z"
 *         updated_at: "2024-01-15T10:30:00Z"
 *         deleted_at: null
 *
 *     AlunoInput:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome completo do aluno
 *         email:
 *           type: string
 *           format: email
 *           description: Email único do aluno
 *       example:
 *         nome: "Maria Santos"
 *         email: "maria.santos@example.com"
 *
 *     AlunoError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Mensagem de erro
 *       example:
 *         error: "Aluno não encontrado"
 *
 *     AlunoSuccessMessage:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *           description: Mensagem de sucesso
 *       example:
 *         mensagem: "Aluno removido com sucesso"
 *
 *     AlunoAtualizadoResponse:
 *       type: object
 *       properties:
 *         alunoAtualizado:
 *           $ref: '#/components/schemas/Aluno'
 *         mensagem:
 *           type: string
 *       example:
 *         alunoAtualizado:
 *           id: 1
 *           nome: "João Silva Atualizado"
 *           email: "joao.novo@example.com"
 *           created_at: "2024-01-15T10:30:00Z"
 *           updated_at: "2024-01-16T14:20:00Z"
 *           deleted_at: null
 *         mensagem: "Aluno atualizado com sucesso"
 *
 *   tags:
 *     - name: Alunos
 *       description: Gerenciamento de alunos
 */

//Endpoints

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluno'
 *       500:
 *         description: Erro ao listar alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro ao listar alunos
 */
routerAlunos.get("/", controller.listar);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Busca um aluno por ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       404:
 *         description: Aluno não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Aluno não encontrado
 */
routerAlunos.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoInput'
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       500:
 *         description: Erro ao criar aluno
 */
routerAlunos.post("/", controller.criar);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno existente
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoInput'
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 alunoAtualizado:
 *                   $ref: '#/components/schemas/Aluno'
 *                 mensagem:
 *                   type: string
 *                   example: Aluno atualizado com sucesso
 *       404:
 *         description: Aluno não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Aluno não encontrado
 */
routerAlunos.put("/:id", controller.atualizar);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Remove um aluno
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Aluno removido com sucesso
 *       404:
 *         description: Aluno não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Aluno não encontrado
 */
routerAlunos.delete("/:id", controller.excluir);

export default routerAlunos;
