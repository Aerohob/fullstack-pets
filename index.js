const pets = require('./pets')

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
async function main() {
    const result = await pets.updateName(6, 'Does it blend');
    console.log(result)
}
main()