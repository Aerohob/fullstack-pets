const db = require('./models/connection')


// Create
function create() {

}

// Retrieve
function one() {

}

// async function all() {
//     const allPets = await db.query(`select * from pets`)
//     .then(data => {
//         console.log(data);
//         return data;
//     }).catch(err => {
//         console.log(err);
//         return [];
//     })
//     console.log(allPets)
//     return allPets;
// }


async function all() {
    try {
        const thePets = db.query(`select * from pets`)
        console.log(thePets);
        return thePets;
    } catch (err) {
        console.log(err);
        return [];
    }
}

// Update
function update() {

}

// Delete
function del() {

}

module.exports = {
    create,
    one,
    all,
    update,
    del
}