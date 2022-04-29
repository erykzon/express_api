// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//GET Crea un endpoint que regrese una lista de explorers
app.get('/v1/explorers',(req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: "Explorer1"}
    const explorer2 = { id: 2, name: "Explorer2"}
    const explorers = [explorer1, explorer2]
    res.status(200).json(explorers)
})
//GET Crea un endpoint que te regrese un explorer mediando un ID
app.get('/v1/explorers/:id',(req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = { id: 1, name: "Erick"}
    res.status(200).json(explorer)
})
//POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) =>{
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros de un cliente
    res.status(201).json({message: "Created"})

})
//PUT Crea un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) =>{
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with is ${req.params.id}`)
    const requestBody =req.body// Parametros de un cliente
    res.status(200).json({message: "Updated!"})

})


// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})