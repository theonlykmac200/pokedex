const express = require("express")
const pokemon = require("./models/pokemon.js")
const app = express()
const methodOverride = require("method-override")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.use(methodOverride("_method"))
// follow I N D U C E S
//index
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon
    })
})
//new
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})



//delete
app.delete("/pokemon/:index", (req, res) => {
    console.log(pokemon[parseInt(req.params.index)])
    console.log("Byyyye Pokemon")
    pokemon.splice(parseInt(req.params.index), 1)
    res.redirect("/pokemon")
})

// update
app.put('/pokemon/:index', (req, res) => {
    console.log(req.body)
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
    }

    let updatedPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: stats,
    }
    pokemon[parseInt(req.params.index)]= updatedPokemon
    
    res.redirect("/pokemon")
})

 
//create
app.post("/pokemon", (req, res) => {
    console.log(req.body)
    pokemon.push (req.body)
        res.redirect("/pokemon")
})

//edit
app.get("/pokemon/:index/edit", (req, res) => {
    res.render("edit.ejs", {
        pokemon:pokemon[parseInt(req.params.index)],
        index: parseInt(req.params.index)
    })
})

//show
app.get("/pokemon/:index", (req, res) => {
    res.render("show.ejs", {
      pokemon : pokemon[parseInt(req.params.index)],
      index: parseInt(req.params.index)
    })
  }) 





app.listen(3000, () => {
    console.log("get ready for a battle")
})