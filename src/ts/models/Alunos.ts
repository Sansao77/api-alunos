import { DataTypes, Model, Sequelize } from "sequelize";

class Aluno extends Model {
  public id!: number;
  public nome!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default function AlunosModel(sequelize: Sequelize): typeof Aluno {
  Aluno.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: "alunos",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  });

  return Aluno;
}
