const express = require("express")
const pokemon = require("./models/pokemon.js")
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

// follow I N D U C E
//index
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon
    })
    console.log(pokemon)
})
//new
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})



//delete

// update
//placeholder for the update route

 
//create
app.post("/pokemon", (req, res) => {
    console.log(req.body)
    pokemon.push (req.body)
        res.redirect("/pokemon")
})

//edit
// show

//show
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
      pokemon : pokemon[req.params.id]
    })
  }) 





app.listen(3000, () => {
    console.log("get ready for a battle")
})