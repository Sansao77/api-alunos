CREATE SCHEMA IF NOT EXISTS escola;
/*CREATE USER 'escola'@'*' IDENTIFIED BY 'escola';
GRANT SELECT, INSERT, UPDATE, DELETE ON escola.* TO 'escola'@'*';*/

CREATE SEQUENCE IF NOT EXISTS escola.alunos_id_seq;
CREATE SEQUENCE IF NOT EXISTS escola.cursos_id_seq;
CREATE SEQUENCE IF NOT EXISTS escola.matriculas_id_seq;

CREATE TABLE IF NOT EXISTS escola.alunos(
    id INT NOT NULL DEFAULT nextval('escola.alunos_id_seq'),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT NULL,
    deleted_at TIMESTAMP NULL DEFAULT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS escola.cursos(
    id INT NOT NULL DEFAULT nextval('escola.cursos_id_seq'),
    nome VARCHAR(255) NOT NULL,
    cargaHoraria INT NOT NULL,
    modalidade VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT NULL,
    deleted_at TIMESTAMP NULL DEFAULT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS escola.matriculas(
    id INT NOT NULL DEFAULT nextval('escola.matriculas_id_seq'),
    aluno_id INT NOT NULL,
    curso_id INT NOT NULL,
    dataMatricula TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,

    PRIMARY KEY(id),
    CONSTRAINT fk_aluno_id FOREIGN KEY (aluno_id) REFERENCES escola.alunos(id) ON DELETE CASCADE,
    CONSTRAINT fk_curso_id FOREIGN KEY (curso_id) REFERENCES escola.cursos(id) ON DELETE CASCADE
);
