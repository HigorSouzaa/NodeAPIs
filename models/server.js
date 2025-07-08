const mongoose = require("mongoose");

const serverScheme = new mongoose.Schema({
  descricao: { type: String, required: true },
});

module.exports = mongoose.model("Server", serverScheme);
