import { DataTypes, Model, Sequelize } from "sequelize";

// Enum Modalidade
const ModalidadeEnum = {
  PRESENCIAL: "presencial",
  HIBRIDA: "hibrida",
  EAD: "ead",
} as const;

type Modalidade = typeof ModalidadeEnum[keyof typeof ModalidadeEnum];

class Curso extends Model {
  public id!: number;
  public nome!: string;
  public cargaHoraria!: number;
  public modalidade!: Modalidade;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
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
    cargaHoraria: {
      field: "cargahoraria",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    modalidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    paranoid: true,
    tableName: "cursos",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  });

  return Curso;
}
