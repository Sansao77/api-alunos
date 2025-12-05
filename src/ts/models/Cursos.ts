import { DataTypes, Model, Sequelize } from "sequelize";

class Curso extends Model {
  public id!: number;
  public nome!: string;
  public descricao!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function CursoModel(sequelize: Sequelize): typeof Curso {
  Curso.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: "cursos",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });

  return Curso;
}
