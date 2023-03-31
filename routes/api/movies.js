const router = require('express').Router();

const { getAll, create, deleteById, getMovieById } = require('../../models/movies')



router.get('/', async (req, res) => {

    try {
        const [movies] = await getAll()
        res.json(movies);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


router.get('/:movieId', async (req, res) => {
    const { movieId } = req.params;
    try {
        const [movie] = await getMovieById(movieId)
        res.json(movie[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})




router.put('/', (req, res) => {

    try {
        res.send('PUT');
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.post('/:new', async (req, res) => {

    try {
        const [newMovie] = await create(req.body);
        const [movie] = await getMovieById(newMovie.insertId)

        res.json(movie[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});




router.delete('/:movieId', async (req, res) => {
    const { movieId } = req.params

    try {
        const [movie] = await getMovieById(movieId)
        const [result] = await deleteById(movieId)
        res.json(movie[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});




module.exports = router;