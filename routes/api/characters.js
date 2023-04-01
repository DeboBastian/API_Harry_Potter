const router = require('express').Router();

const { getAll, getById, createCharacter, deleteCharacterById, update } = require('../../models/characters')



router.get('/', async (req, res) => {

    try {
        const [characters] = await getAll()
        res.json(characters);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.get('/:characterId', async (req, res) => {
    const { characterId } = req.params;
    try {
        const [character] = await getById(characterId)
        res.json(character[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})



router.post('/:new', async (req, res) => {

    try {
        const [newCharacter] = await createCharacter(req.body);
        const [character] = await getById(newCharacter.insertId)

        res.json(character[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.put('/:characterId', async (req, res) => {
    const { characterId } = req.params;
    try {
        const [character] = await update(characterId, req.body)
        const [modifyCharacter] = await getById(characterId)
        res.json(modifyCharacter[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.delete('/:characterId', async (req, res) => {
    const { characterId } = req.params

    try {
        const [character] = await getById(characterId)
        const [result] = await deleteCharacterById(characterId)
        res.json(character[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
module.exports = router;