-- Inserindo Alunos
INSERT INTO escola.alunos (nome, email, created_at) VALUES
('Ana Silva Santos', 'ana.silva@email.com', NOW()),
('Bruno Costa Oliveira', 'bruno.costa@email.com', NOW()),
('Carla Mendes Ferreira', 'carla.mendes@email.com', NOW()),
('Daniel Souza Lima', 'daniel.souza@email.com', NOW()),
('Elena Rodrigues Alves', 'elena.rodrigues@email.com', NOW()),
('Felipe Martins Rocha', 'felipe.martins@email.com', NOW()),
('Gabriela Pereira Dias', 'gabriela.pereira@email.com', NOW()),
('Henrique Barbosa Cruz', 'henrique.barbosa@email.com', NOW()),
('Isabela Cardoso Ramos', 'isabela.cardoso@email.com', NOW()),
('João Fernandes Moura', 'joao.fernandes@email.com', NOW()),
('Larissa Gomes Teixeira', 'larissa.gomes@email.com', NOW()),
('Marcos Vieira Cunha', 'marcos.vieira@email.com', NOW()),
('Natália Araújo Lopes', 'natalia.araujo@email.com', NOW()),
('Otávio Correia Campos', 'otavio.correia@email.com', NOW()),
('Paula Monteiro Silva', 'paula.monteiro@email.com', NOW()),
('Rafael Carvalho Nunes', 'rafael.carvalho@email.com', NOW()),
('Sofia Batista Freitas', 'sofia.batista@email.com', NOW()),
('Thiago Ribeiro Castro', 'thiago.ribeiro@email.com', NOW()),
('Vanessa Almeida Porto', 'vanessa.almeida@email.com', NOW()),
('William Santos Barros', 'william.santos@email.com', NOW());

-- Inserindo Cursos
INSERT INTO escola.cursos (nome, cargaHoraria, modalidade, created_at) VALUES
('Desenvolvimento Web Full Stack', 200, 'Online', NOW()),
('Python para Análise de Dados', 120, 'Presencial', NOW()),
('Marketing Digital', 80, 'Híbrido', NOW()),
('Design Gráfico', 150, 'Online', NOW()),
('Inglês Avançado', 180, 'Presencial', NOW()),
('Gestão de Projetos', 100, 'Online', NOW()),
('Fotografia Profissional', 60, 'Presencial', NOW()),
('Excel Avançado', 40, 'Online', NOW()),
('DevOps e Cloud Computing', 160, 'Híbrido', NOW()),
('UX/UI Design', 140, 'Online', NOW()),
('Redação Criativa', 90, 'Presencial', NOW()),
('Segurança da Informação', 110, 'Online', NOW()),
('Espanhol Intermediário', 120, 'Híbrido', NOW()),
('Inteligência Artificial', 180, 'Online', NOW()),
('Contabilidade Básica', 100, 'Presencial', NOW());

-- Inserindo Matrículas
INSERT INTO escola.matriculas (aluno_id, curso_id, dataMatricula) VALUES
-- Ana Silva (aluno_id: 1)
(1, 1, NOW()),
(1, 4, NOW()),

-- Bruno Costa (aluno_id: 2)
(2, 2, NOW()),
(2, 8, NOW()),

-- Carla Mendes (aluno_id: 3)
(3, 3, NOW()),
(3, 5, NOW()),
(3, 11, NOW()),

-- Daniel Souza (aluno_id: 4)
(4, 1, NOW()),
(4, 9, NOW()),

-- Elena Rodrigues (aluno_id: 5)
(5, 6, NOW()),

-- Felipe Martins (aluno_id: 6)
(6, 7, NOW()),
(6, 4, NOW()),

-- Gabriela Pereira (aluno_id: 7)
(7, 10, NOW()),
(7, 3, NOW()),

-- Henrique Barbosa (aluno_id: 8)
(8, 12, NOW()),
(8, 14, NOW()),

-- Isabela Cardoso (aluno_id: 9)
(9, 5, NOW()),
(9, 13, NOW()),

-- João Fernandes (aluno_id: 10)
(10, 15, NOW()),

-- Larissa Gomes (aluno_id: 11)
(11, 11, NOW()),
(11, 10, NOW()),

-- Marcos Vieira (aluno_id: 12)
(12, 2, NOW()),
(12, 14, NOW()),

-- Natália Araújo (aluno_id: 13)
(13, 4, NOW()),

-- Otávio Correia (aluno_id: 14)
(14, 9, NOW()),
(14, 1, NOW()),

-- Paula Monteiro (aluno_id: 15)
(15, 6, NOW()),
(15, 8, NOW()),

-- Rafael Carvalho (aluno_id: 16)
(16, 12, NOW()),

-- Sofia Batista (aluno_id: 17)
(17, 5, NOW()),
(17, 13, NOW()),

-- Thiago Ribeiro (aluno_id: 18)
(18, 1, NOW()),

-- Vanessa Almeida (aluno_id: 19)
(19, 3, NOW()),
(19, 7, NOW()),

-- William Santos (aluno_id: 20)
(20, 14, NOW()),
(20, 9, NOW());
