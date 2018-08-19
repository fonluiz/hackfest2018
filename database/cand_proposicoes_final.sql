USE hackfest_db;

DROP TABLE IF EXISTS cand_proposicoes_final;
CREATE TABLE cand_proposicoes_final(
  id_autor VARCHAR(8),
  n VARCHAR(3),
  candidato_nome VARCHAR(50)
  
  CONSTRAINT cand_proposicoes_final_pk PRIMARY KEY(id_autor)
);
