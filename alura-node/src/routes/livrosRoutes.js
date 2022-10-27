import express from "express"
import livroController from "../controller/livrosController.js"

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros", livroController.cadastrarLivros)
    .put("/livros/:id", livroController.atualizarLivros)
    .delete("/livros/:id",livroController.excluirLivro)


export default router;