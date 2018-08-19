var express = require('express');
var pool = require('../config/db_config.js');
import { filterService } from '../services/filterService';

const router = express.Router();

/* Rota padrão para teste */
router.get('/', (req, res) => {    
    res.send('api works!');
});

// Retorna a lista com todos os candidatos a deputado da eleição de 2018
router.get('/deputado', (req, res) => {
    let parameters = [];
    const query = "SELECT * FROM dep_federal;";

    execSQLQuery(query, parameters, res);
});

router.get('/cadastrais', (req, res) => {    
    let parameters = [req.query.genero, req.query.escolaridade, req.query.corRaca, req.query.novo, req.query.estado, req.query.cargo];    
    let query;
    let validParameters;

    query = filterService.criaConsulta(parameters);
    validParameters = filterService.getParametrosValidos(parameters);    
    
    execSQLQuery(query, validParameters, res);
});

// Retorna a lista com todos os candidatos a deputado da eleição de 2018
router.get('/deputado/:id', (req, res) => {
  let parameters = [req.params.id];
  const query = "SELECT * from dep_federal d, cod_grau_instrucao g, cod_cor_raca r, cod_partido p, cod_ocupacao o, cod_estado_civil e WHERE d.cod_grau_instrucao = g.cod_grau_instrucao AND d.cod_cor_raca = r.cod_cor_raca AND d.cod_ocupacao = o.cod_ocupacao AND d.cod_estado_civil = e.cod_estado_civil AND d.Partido = p.Partido AND id = ?";

  execSQLQuery(query, parameters, res);
});

// Retorna os patrimônios históricos de um deputado
router.get('/patrimonio/:cpf', (req, res) => {
  let parameters = [req.params.cpf];
  const query = "SELECT * FROM bens_candidatos WHERE cpfCandidato = ?;";

  execSQLQuery(query, parameters, res);
});

// Retorna a lista com todas as proposições de 2018
router.get('/proposicao', (req, res) => {
  let parameters = [];
  const query = "SELECT * FROM cand_proposicoes_final;";

  execSQLQuery(query, parameters, res);
});

// Retorna a lista com todas as proposições a partir de um id
router.get('/proposicao/:nome', (req, res) => {
  let parameters = [req.params.nome];
  const query = "SELECT * FROM cand_proposicoes_final WHERE candidato_nome = ?;";
  
  execSQLQuery(query, parameters, res);
});

router.get('/carreira/:cpf', (req, res) => {
  let parameters = [req.params.cpf];
  const query = "SELECT t.total FROM (SELECT COUNT(*) as total FROM bens_candidatos WHERE cpfCandidato = ?) t WHERE t.total > 1";
  
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