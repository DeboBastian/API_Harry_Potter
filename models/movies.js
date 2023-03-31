

const getAll = () => {
    return db.query('SELECT * from harry_potter.movies')
}

const getMovieById = (movieId) => {
    return db.query('SELECT * from harry_potter.movies where id = ?', [movieId])

}


const create = ({ title, year, image }) => {
    return db.query(`INSERT INTO harry_potter.movies
(title, year, image) VALUES (?,?,?)`, [title, year, image])

}


const deleteById = (movieId) => {
    return db.query(`DELETE FROM harry_potter.movies WHERE id = ?`, [movieId])
}


module.exports = { getAll, create, deleteById, getMovieById };