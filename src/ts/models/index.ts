import sequelize from "../config/config.ts";
import AlunoModel from "./Alunos.ts";
import CursoModel from "./Cursos.ts";
import MatriculaModel from "./Matriculas.ts";

const Aluno = AlunoModel(sequelize);
const Curso = CursoModel(sequelize);
const Matricula = MatriculaModel(sequelize);

Aluno.hasMany(Matricula, { foreignKey: "alunoId" });
Matricula.belongsTo(Aluno, { foreignKey: "alunoId" });

Curso.hasMany(Matricula, { foreignKey: "cursoId" });
Matricula.belongsTo(Curso, { foreignKey: "cursoId" });

async function syncDatabase() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log("Error: " + (error as Error).message);
  }
}

syncDatabase();

export { Aluno, Curso, Matricula, sequelize };
