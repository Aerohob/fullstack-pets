const express = require('express')
const app = express()
const http = require('http');
const pets = require('./pets')
const PORT = 3000;
// const mustacheExpress = require('mustache-express')
const es6Renderer = require('es6-template-engine')
const path = require('path')
// const VIEWS_PATH = path.join(__dirname, '/views')
const bodyParser = require('body-parser')


// app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.render('main')
})
// Pets 
app.get('/pets', async (req, res) => {
    const thePets = await pets.all();
    res.json(thePets)
})

app.post('/pets', async (req, res) => {
    const thePets = await pets.all();
    res.json(thePets)
})

// Create
app.get('pets/create', ( req, res) => {
    res.render('pets/form')
})
app.post('pets/create', bodyParser, async (req, res) => {
    const { name, species, birthdate } = req.body;
    // I could create a new pet
    const owner_id_CHANGEME = 1;
    await pets.create(name, species, birthdate, owner_id_CHANGEME)

});

// Update
app.get('/pets/:id/edit')
app.post('/pets/:id/edit')

// Delete
app.get('/pets/:id/delete')
app.post('/pets/:id/delete')




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
// pets.all() 
// .then(allthePets => {

// });

/* For all pets
async function main() {
    const thePets = await pets.all();
    console.log(thePets);
}
main();
*/

/* For one
async function main() {
    const aPet = await pets.one(1);
    console.log(aPet);
}
main();
*/
/* To delete
async function main() {
    const result = await pets.del(1);
    console.log(result)
}
main();
*/
/*
async function main() {
    const result = await pets.updateName(6, 'Does it blend');
    console.log(result)
}
main()
*/
/*
async function main() {
    const updateResult = await pets.updateBirthdate(6, new Date());
    console.log(updateResult);
}
main()
*/
/*
async function main() {
    const createResult = await pets.create('ITWORKS', 'dog', '2004-04-20', 1);
    console.log(createResult)
}
main()
*/