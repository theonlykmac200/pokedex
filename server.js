const express = require("express")
const pokemon = require("./models/pokemon")
const app = express()

app.use(express.urlencoded({extended: true}))

// follow I N D U C E

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon
    })
})

app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs" , {
        pokemon: pokemon[req.params.id]
    })
})





app.listen(3000, () => {
    console.log("get ready for a battle")
})