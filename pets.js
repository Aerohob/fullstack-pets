const db = require('./models/connection')


// Create
async function create(name, species, birthdate, owner_id) {
    const result = await db.result(`
    insert into pets
        (name, species, birthdate, owner_id)
    values
    ($1, $2, $3, $4)
    `, [name, species, birthdate, owner_id])
    return result;
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



async function updateBirthdate(id, dateObject) {
    // '2020-01-13'
    let year = dateObject.getFullYear(); //yyyy
    let month = dateObject.getMonth() + 1; //mm
    if (month < 10) {
        month = `0${month}`
    }
    let day = dateObject.getDate(); //dd
    if (day < 10) {
        day = `0${day}`;
    }
    const dateString = `${year}-${month}-${day}`;
    const result = await db.result(`
    update pets set
        birthdate=$1
    where id=$2
    `, [dateString, id]);
    return result;
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
    updateBirthdate,
    del
}