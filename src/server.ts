import express from "express";
import routerAlunos from "./routes/alunos.router.ts";
import routerCursos from "./routes/cursos.router.ts";
import routerMatriculas from "./routes/matriculas.router.ts";

const PORTA = 3000;

const app = express();

app.use(express.json());
app.use("/alunos", routerAlunos);
app.use("/cursos", routerCursos);
app.use("/matriculas", routerMatriculas);

app.get("/", (req, res) => {
  res.json(
    {
      message: "API com Express está funcionando!",
    },
  );
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em porta: http://localhost:${PORTA}`);
});
