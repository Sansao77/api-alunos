import { DataTypes, Model, Sequelize } from "sequelize";

class Matricula extends Model {
  public id!: number;
  public alunoId!: number;
  public cursoId!: number;
  public readonly createdAt!: Date;
  public readonly deletedAt!: Date;
}

export default function MatriculaModel(sequelize: Sequelize): typeof Matricula {
  Matricula.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    alunoId: {
      field: "aluno_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cursoId: {
      field: "curso_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    paranoid: true,
    tableName: "matriculas",
    createdAt: "created_at",
    updatedAt: false,
    deletedAt: "deleted_at",
  });

  return Matricula;
}
