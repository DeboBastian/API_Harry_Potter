const jwt = require('jsonwebtoken');
const { getById } = require('../models/users.model')

const checkToken = async (req, res, next) => {
    // Comprobar si el TOKEN viene incluido en la cabecera Authorization
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Debes incluir la cabecera de Authorization' })
    }

    const token = req.headers['authorization'];

    // Comprobar si el TOKEN es correcto
    // Si el token esta mal, verify lanza una excepcion

    let obj;
    try {
        obj = jwt.verify(token, 'clave ultra secretisima');
        console.log(obj);
    } catch (error) {
        return res.json({ fatal: 'El token es incorrecto' });
    }

    const [result] = await getById(obj.user_id);

    req.user = result[0];

    next();
}

const checkAdmin = (req, res, next) => {
    // Si ejecuto un codigo que va despues de la ejecucion del metodo checkToken, tengo disponible la varible req.user
    // OBJETIVO: Si el usuario logado es admin, llamamos a next. Si no, respondemos con error.


    if (req.user.role !== 'admin') {
        return res.json({ fatal: 'No tienes permisos' });
    }

    next();


}

module.exports = {
    checkToken, checkAdmin
}