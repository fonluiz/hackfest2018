var express = require('express');
//var pool = require('../config/db_config.js');

const router = express.Router();

/* Rota padrão para teste */
router.get('/', (req, res) => {    
    res.send('api works!');
});

module.exports = router;