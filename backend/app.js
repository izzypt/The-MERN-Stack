const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')
const app = express();


users = [
    {id:1,
    nome: "pedro",
idade: "45"},
    {id:2,
        nome: "Simao",
    idade: "35"},
    {
        id:3,
        nome: "pedro",

        idade: "23"
    }
]

app.use(userRoutes)

app.listen(5000);