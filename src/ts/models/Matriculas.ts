import { DataTypes, Model, Sequelize } from "sequelize";

class Matricula extends Model {
  public id!: number;
  public alunoId!: number;
  public cursoId!: number;
}

export default function MatriculaModel(sequelize: Sequelize): typeof Matricula {
  Matricula.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: "matriculas",
  });

  return Matricula;
}
