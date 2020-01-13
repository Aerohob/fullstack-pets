const db = require('./models/connection')


// Create
function create() {

}

// Retrieve
async function one(id) {
    try {
        //let onePet = await db.one(`select * from pets where id = ${id}`)
        //console.log(onePet);
        let onePet = await db.one(`select * from pets where id=$1`, [id])
        return onePet;
    } catch (err) {
        return [];
    }
}
// Promise version
/*
function one(id) {
    return db.one(`select * from pets where id=${id}`)
    .catch(err => {
        console.log(err);
        return null
    })
}
*/

// ALL VERSION
async function all() {
    const allPets = await db.query(`select * from pets`)
        .then(data => {
            console.log(data);
            return data;
        }).catch(err => {
            console.log(err);
            return [];
        })
    console.log(allPets)
    return allPets;
}


async function all() {
    try {
        const thePets = await db.query(`select * from pets`)
        console.log(thePets);
        return thePets;
    } catch (err) {
        console.log(err);
        return [];
    }
}


// Update
async function updateName(id, name) {
    const result = await db.result(`
    update pets set
        name=$1
    where id=$2;
    `, [name, id]);
if (result.rowCount === 1) {
    return id;
} else {
    return null;
}
}



async function updateBirthdate(id, birthday) {
    const result = await db.result
}
// Delete
async function del(id) {
    const result = await db.result(`delete from pets where id=$1`, [id])
    console.log(result)
    if (result.rowCount === 1) {
        return id;
    } else {
        return null;
    }
}

module.exports = {
    create,
    one,
    all,
    updateName,
    del
}