var express = require('express');
var pool = require('../config/db_config.js');
import { filterService } from '../services/filterService';

const router = express.Router();

/* Rota padrão para teste */
router.get('/', (req, res) => {    
    res.send('api works!');
});

router.get('/cadastrais', (req, res) => {    
    let parameters = [req.query.genero, req.query.escolaridade, req.query.corRaca, req.query.novo, req.query.estado, req.query.cargo];    
    
    let query = filterService.criaConsulta(parameters);
    let validParameters = filterService.getParametrosValidos(parameters);    
    
    execSQLQuery(query, validParameters, res);
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