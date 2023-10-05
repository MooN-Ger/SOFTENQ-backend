const cors = require('cors')
const express = require('express')
const PORT = 3000
const app = express()
app.use(cors())

app.get("/api", (req, res) => {
    res.send("Hello from backend")
})

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`)
})