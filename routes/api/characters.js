const router = require('express').Router();

const { getAll } = require('../../models/characters')



router.get('/', async (req, res) => {

    try {
        const [characters] = await getAll()
        res.json(characters);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



module.exports = router;