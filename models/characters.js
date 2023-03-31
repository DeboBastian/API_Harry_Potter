

const getAll = () => {
    return db.query('SELECT * from harry_potter.characters')
}


module.exports = { getAll }