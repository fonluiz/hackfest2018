UPDATE dep_federal
SET cod_grau_instrucao = NULL
WHERE cod_grau_instrucao = 1;

UPDATE dep_federal
SET cod_grau_instrucao = 1
WHERE cod_grau_instrucao = 2;

UPDATE dep_federal
SET cod_grau_instrucao = 2
WHERE cod_grau_instrucao IS NULL;

UPDATE dep_federal
SET cod_grau_instrucao = NULL
WHERE cod_grau_instrucao = 3;

UPDATE dep_federal
SET cod_grau_instrucao = 3
WHERE cod_grau_instrucao = 4;


UPDATE dep_federal
SET cod_grau_instrucao = 4
WHERE cod_grau_instrucao IS NULL;

UPDATE dep_federal
SET cod_grau_instrucao = NULL
WHERE cod_grau_instrucao = 5;

UPDATE dep_federal
SET cod_grau_instrucao = 5
WHERE cod_grau_instrucao = 6;

UPDATE dep_federal
SET cod_grau_instrucao = 6
WHERE cod_grau_instrucao IS NULL;
