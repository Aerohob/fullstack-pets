const pets = require('./pets')

// pets.all() 
// .then(allthePets => {

// });

async function main() {
    const thePets = await pets.all();
    console.log(thePets);
}
main();