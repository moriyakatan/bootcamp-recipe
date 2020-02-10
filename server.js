const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const port = 8080


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_module')))
app.use(bodyParser.json())

const ingredient = {
  data:{}
}


app.get('/sanity/:ingredient', (req, res) => {
    const ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response, body) { 
      const data = JSON.parse(body).results
      const recipe = data


      const ingredientFilter = recipe.map(recipe => {
        return {
          title: recipe.title,
          thumbnail: recipe.thumbnail,
          link: recipe.href
        }
      })
       
       res.send(ingredientFilter)
    })
     
})






app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})