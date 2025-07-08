const mongoose = require("mongoose");

// Ja permite nao somente acessar o DB
mongoose.set("strictQuery", true);

//Chama o dotenv pra poder ler o .env
require("dotenv").config();

// Credenciais do DB
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

// Funcao asincrona para conectar no banco de dados
async function main() {
  await mongoose.connect(
    `mongodb+srv://${db_user}:${db_pass}@api.1hr0gpv.mongodb.net/?retryWrites=true&w=majority&appName=API`
  );
  console.log("Conectou ao banco de dados");
}

main().catch((err) => console.log(err));

// Funcao asincrona para conectar no banco de dados
// async function main() {
//     try {
//       await mongoose.connect(
//         `mongodb+srv://${db_user}:${db_pass}@api.1hr0gpv.mongodb.net/?retryWrites=true&w=majority&appName=API`
//       );
//       console.log("Conectou ao banco de dados");
//     } catch (error) {
//       console.log(error);
//     }
//   }
