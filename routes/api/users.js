const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { create, getById, getByEmail } = require('../../models/users.model');
const { createToken } = require('../../helpers/utils')




router.post('/register', async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8);


    try {

        const [newUser] = await create(req.body);
        const [user] = await getById(newUser.insertId)
        res.json(user[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }


});


router.post('/login', async (req, res) => {
    try {
        const [result] = await getByEmail(req.body.email);
        if (result.length === 0) {
            return res.json({ fatal: 'error en email o contraseña' })
        }
        const user = result[0];

        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (!iguales) {
            return res.json({ fatal: 'error en email o contraseña' })
        }
        res.json({
            succes: 'Login correcto',
            token: createToken(user)

        })
    } catch (error) {
        res.json({ fatal: error.message })
    }
})





module.exports = router;