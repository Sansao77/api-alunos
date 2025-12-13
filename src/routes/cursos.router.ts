import { Router } from "express";
import * as controller from "../controllers/cursosController.ts";

const routerCursos = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do curso
 *         nome:
 *           type: string
 *           description: Nome do curso
 *         cargahoraria:
 *           type: integer
 *           description: Carga horária total do curso em horas
 *         modalidade:
 *           type: string
 *           enum: [presencial, hibrida, ead]
 *           description: Modalidade de ensino do curso
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
 *         nome: "Desenvolvimento Web Full Stack"
 *         cargahoraria: 360
 *         modalidade: "hibrida"
 *         created_at: "2024-01-15T10:30:00Z"
 *         updated_at: "2024-01-15T10:30:00Z"
 *         deleted_at: null
 *
 *     CursoInput:
 *       type: object
 *       required:
 *         - nome
 *         - cargahoraria
 *         - modalidade
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome do curso
 *           minLength: 1
 *         cargahoraria:
 *           type: integer
 *           description: Carga horária total do curso em horas
 *           minimum: 1
 *         modalidade:
 *           type: string
 *           enum: [presencial, hibrida, ead]
 *           description: Modalidade de ensino do curso (presencial, hibrida ou ead)
 *       example:
 *         nome: "Análise de Dados com Python"
 *         cargahoraria: 240
 *         modalidade: "ead"
 *
 *     CursoError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Mensagem de erro
 *       example:
 *         error: "Curso não encontrado"
 *
 *     CursoSuccessMessage:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *           description: Mensagem de sucesso
 *       example:
 *         mensagem: "Curso removido com sucesso"
 *
 *     CursoAtualizadoResponse:
 *       type: object
 *       properties:
 *         CursoAtualizado:
 *           $ref: '#/components/schemas/Curso'
 *         mensagem:
 *           type: string
 *       example:
 *         CursoAtualizado:
 *           id: 1
 *           nome: "Desenvolvimento Web Full Stack Atualizado"
 *           cargahoraria: 400
 *           modalidade: "presencial"
 *           created_at: "2024-01-15T10:30:00Z"
 *           updated_at: "2024-01-16T14:20:00Z"
 *           deleted_at: null
 *         mensagem: "Curso atualizado com sucesso"
 *
 *   tags:
 *     - name: Cursos
 *       description: Gerenciamento de cursos
 */

//Endpoints

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     description: Retorna uma lista com todos os cursos cadastrados no sistema
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoError'
 *             example:
 *               error: "Erro ao listar cursos"
 */
routerCursos.get("/", controller.listar);

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Busca um curso por ID
 *     description: Retorna os dados de um curso específico através do seu ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico do curso
 *         example: 1
 *     responses:
 *       200:
 *         description: Curso encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       404:
 *         description: Curso não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoError'
 *             example:
 *               error: "Curso não encontrado"
 *       500:
 *         description: Erro interno do servidor
 */
routerCursos.get("/:id", controller.buscarPorId);

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     description: Cadastra um novo curso no sistema com nome, carga horária e modalidade
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       400:
 *         description: Dados inválidos ou campos obrigatórios não preenchidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoError'
 *       500:
 *         description: Erro interno do servidor
 */
routerCursos.post("/", controller.criar);

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza um curso existente
 *     description: Atualiza os dados de um curso específico através do seu ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico do curso
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       200:
 *         description: Curso atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoAtualizadoResponse'
 *       404:
 *         description: Curso não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoError'
 *             example:
 *               error: "Curso não encontrado"
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
routerCursos.put("/:id", controller.atualizar);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Remove um curso
 *     description: Realiza a exclusão lógica (soft delete) de um curso através do seu ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico do curso
 *         example: 1
 *     responses:
 *       200:
 *         description: Curso removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoSuccessMessage'
 *             example:
 *               mensagem: "Curso removido com sucesso"
 *       404:
 *         description: Curso não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoError'
 *             example:
 *               error: "Curso não encontrado"
 *       500:
 *         description: Erro interno do servidor
 */
routerCursos.delete("/:id", controller.excluir);

export default routerCursos;
