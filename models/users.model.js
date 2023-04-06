const create = ({ username, email, password, role }) => {
    return db.query(`INSERT INTO harry_potter.users
        (username,
            email,
            password, role
        )
values(?,?,?,?)
        `,
        [username, email, password, role]

    )
}


const getById = (usersId) => {
    return db.query('SELECT * from harry_potter.users where id = ?', [usersId])
}


const getByEmail = (usersEmail) => {
    return db.query('SELECT * from harry_potter.users where email = ?', [usersEmail])
}


module.exports = { create, getById, getByEmail }