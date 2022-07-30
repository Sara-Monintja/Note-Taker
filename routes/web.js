const router = require('express').Router();
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');

router.get('/', (req, res) => {

    res.sendFile(path.join(publicPath, 'index.html'));

});

router.get('/notes', (req, res) => {

    res.sendFile(path.join(publicPath, 'notes.html'));

});

module.exports = router; 