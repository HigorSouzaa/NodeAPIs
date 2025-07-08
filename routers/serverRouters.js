const express = require("express");
const serverController = require("../controllers/serverControllers");

const router = express.Router();

router.post("/", serverController.create);
router.put("/:id", serverController.update);
router.get("/", serverController.getAll);
router.delete("/:id", serverController.delete);

module.exports = router;
