

const getAll = () => {
    return db.query('SELECT * from harry_potter.characters')
}



const getById = (characterId) => {
    return db.query('SELECT * from harry_potter.characters where id = ?', [characterId])
}



const update = (characterId, { name, type, image, status }) => {
    return db.query(`UPDATE harry_potter.characters
SET name = ?, type = ?, image = ?, status = ? where id = ?`, [name, type, image, status, characterId])
}



const createCharacter = ({ name, type, image, status }) => {
    return db.query(`INSERT INTO harry_potter.characters
(name, type, image, status) VALUES (?,?,?,?)`, [name, type, image, status])
}


const deleteCharacterById = (characterId) => {
    return db.query(`DELETE FROM harry_potter.characters WHERE id = ?`, [characterId])
}



module.exports = { getAll, getById, createCharacter, deleteCharacterById, update }