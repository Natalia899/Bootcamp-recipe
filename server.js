const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    console.log('ok');

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        data = JSON.parse(response.toString())
        console.log(data);
        res.end()
    })
})

const port = 8080
app.listen(port, function () {
    console.log('Server is running')
})
