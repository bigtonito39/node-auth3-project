const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")


const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use("/",welcomeRouter)

server.use((error, req, res,next) => {
    res.status(500).json({
        message:"Something ent wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})