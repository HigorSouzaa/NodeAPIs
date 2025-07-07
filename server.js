const express = require("express");
require("./db");
const server = require("./models/server");
const app = express();
const PORT = 3000;

//Falando que o express usara json
app.use(express.json());

// Confirmando que o servidor esta rodando na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post("/tarefas", async (req, res) => {
  const { descricao } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "Preencha a descrição" });
  }

  try {
    const novaTarefa = new server({ descricao });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir tarefa" });
  }
});

// Delete precisa de um parametro
app.delete("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tarefas = await server.findByIdAndDelete(id);
    if (!tarefas) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: "Erro ao excluir a tarefa" });
  }
});

app.get("/tarefas", async (req, res) => {
  try {
    const tarefas = await server.find();
    if (!tarefas) {
      return res.status(404).json({ erro: "Nenhuma tarefa encontrada" });
    }
    res.status(201).json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: "Erro mostrar tarefas" });
  }
});
