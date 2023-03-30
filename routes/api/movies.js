const router = require('express').Router();

const { getAll } = require('../../models/movies')



router.get('/', async (req, res) => {

    try {
        const [movies] = await getAll()
        res.json(movies);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.put('/', (req, res) => {

    try {
        res.send('PUT');
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.post('/', (req, res) => {

    try {
        res.send('POST');
    } catch (error) {
        res.json({ fatal: error.message });
    }
});




router.delete('/', (req, res) => {

    try {
        res.send('DELETE');
    } catch (error) {
        res.json({ fatal: error.message });
    }
});




module.exports = router;