var express = require('express');
var pool = require('../config/db_config.js');

const router = express.Router();

/* Rota padrão para teste */
router.get('/', (req, res) => {    
    res.send('api works!');
});

router.get('/mensagem', (req, res) => {
    const query = "SELECT * FROM teste;" 
    const parameters = "";

    execSQLQuery(query, parameters, res);
});

// Função Wrapper para executar consultas no banco, 
function execSQLQuery(sqlQuery, parameters, res) {

    pool.getConnection(function (err, connection) {

        if(err){
            console.log(err)
        }
  
      connection.query(sqlQuery, parameters, function (error, results, fields) {
  
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json(results);
        }
  
        connection.release();
  
      });
    });
  
  }

module.exports = router;