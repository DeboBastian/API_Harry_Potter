

const getAll = () => {
    return db.query('SELECT * from harry_potter.movies')
}


module.exports = { getAll };