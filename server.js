const express = require("express")
const app = express()

app.use(express.urlencoded({extended: true}))

// follow I N D U C E

app.get("/pokemon", (req, res) => {
    res.send("This page will show all my pokemon!")
})

app.get("/pokemon/new", (req, res) => {
    res.send("We'll put more Pokemon here")
})

app.get("/pokemon/:id", (req, res) => {
    res.send("a pokemon's details go on this page")
})





app.listen(3000, () => {
    console.log("get ready for a battle")
})