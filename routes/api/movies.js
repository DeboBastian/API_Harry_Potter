const router = require('express').Router();




router.get('/', (req, res) => {

    try {
        res.send('GET');
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