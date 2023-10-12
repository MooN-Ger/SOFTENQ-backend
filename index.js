const express = require('express')
const cors = require('cors')
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()
//const {sequelize} = require('sequelize')
const app = express()
//app.use(cors())

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

/*app.get("/", (req, res) => {
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
initApp()*/

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

