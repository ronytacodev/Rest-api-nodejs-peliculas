const {Router} = require('express');
const router = Router();

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const {title, director, year, rating} = req.body;
    if (title && director && year && rating) {
        const id = movies.length +1;
        const newMovie = {...req.body, id};
        console.log(newMovie);
        // res.json('saved');
        movies.push(newMovie);
        res.json(movies);
    } else {
        // res.send('Wrong Request');
        res.json({error: 'There was an error'});
        // me quede en el min 54.23
    }
});

module.exports = router;