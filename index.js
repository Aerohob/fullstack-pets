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
async function main() {
    const createResult = await pets.create('ITWORKS', 'dog', '2004-04-20', 1);
    console.log(createResult)
}
main()