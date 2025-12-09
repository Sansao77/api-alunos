import express from "express";
import { router } from "./routes/alunos.router.ts";

const PORTA = 3000;

const app = express();

app.use(express.json());
app.use("/alunos", router);

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
