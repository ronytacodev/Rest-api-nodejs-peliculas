const {Router} = require('express');
const router = Router();

router.get('/test', (req,res) => {
    const data = {
        "name": "rony",
        "lastname": "taco",
    };
    res.json({data});
});

module.exports = router;