const express = require('express');

const router = express.Router()

users = [
    {
        id:1,
        nome: "pedro",
        idade: "45"},
    {
        id:2,
        nome: "Simao",
        idade: "35"
    },
    {
        id:3,
        nome: "maria",
        idade: "23"
    }
]

router.get("/", (req, res) => {
    console.log("Get request in users")
    console.log(req.params)
    res.json({message: "Hey there buddy"})
})

router.get("/api/users/:id", (req, res) => {
    console.log("Get request in users")
    console.log(req.params)
    users.find((e) => {
        if (e.id == req.params.id)
            res.json(e)
    })
    
})

module.exports = router;