const express = require("express");
require("./config/db");
const tarefasRouters = require("./routers/serverRouters");
const server = require("./models/server");
const app = express();
const cors = require("cors");

//Falando que o express usara json
app.use(express.json());
app.use(cors());

const PORT = 3000;

// Fazendo o servidor entender que a aplicação é usando /tarefas
app.use("/tarefas", tarefasRouters);

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo a API");
});

// Confirmando que o servidor esta rodando na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
