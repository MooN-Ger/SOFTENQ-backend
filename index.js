const express = require('express')
const cors = require('cors')
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()
const {sequelize} = require('sequelize')
const app = express()
app.use(cors())

const db = require("./sequelize/config/config_to_connect.js")

app.get("/getData", (req, res) => {
    res.send("Hello from backend")
})

app.listen(3000, () => {
    console.log(`Server is starting on port 3000`)
})

const initApp = async () => {
    try {
        await db.authenticate()
        console.log("Connection has been established successfully")

        const port = 8000
        app.listen(port, () => {
            console.log('Frontend server is running')
        })
    } catch (error) {
        console.error("Unable to connect to the database:", error.original)
    }
}

initApp()