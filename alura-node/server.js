import app from "../alura-node/src/app.js"

const port = process.env.port || 3001


app.listen(port, () => {
    console.log(`Escutando servidor na porta ${port}`)
})