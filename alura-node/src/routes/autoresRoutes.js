import express from "express"
import autorController from "../controller/autoresController.js"

const router = express.Router();

router
    .get("/autores", autorController.listarAutores)
    .get("/autores/:id", autorController.listarAutoresPorId)
    .post("/autores", autorController.cadastrarAutores)
    .put("/autores/:id", autorController.atualizarAutores)
    .delete("/autores/:id",autorController.excluirAutor)


export default router;