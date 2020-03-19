const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(helmet())
server.use(express.json())
// middleware that helps us get values from cookies sent by the client
server.use(cookieParser())

server.use("/",welcomeRouter)
server.use("/auth", authRouter)
server.use("/users", usersRouter)

server.use((error, req, res,next) => {
    res.status(500).json({
        message:"Something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})