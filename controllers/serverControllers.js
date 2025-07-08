const server = require("../models/server");

exports.create = async (req, res) => {
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
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;

  if (!id) {
    return res
      .status(404)
      .json({ erro: "Id de tarefa não existente no sistema" });
  }

  if (!descricao) {
    return res.status(404).json({ erro: "Preencha a descrição" });
  }

  try {
    const tarefa = await server.findByIdAndUpdate(
      id,
      { descricao },
      { new: true }
    );
    if (!tarefa) {
      return res.status(404).json({ erro: "tarefa não existe" });
    }
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar terefa" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const tarefas = await server.find();
    if (!tarefas) {
      return res.status(404).json({ erro: "Nenhuma tarefa encontrada" });
    }
    res.status(209).json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: "Erro mostrar tarefas" });
  }
};

// Delete precisa de um parametro
exports.delete = async (req, res) => {
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
};
