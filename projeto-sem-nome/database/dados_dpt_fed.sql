DROP DATABASE IF EXISTS hackfest_db;
CREATE DATABASE hackfest_db;
USE hackfest_db;

DROP TABLE IF EXISTS cor_raca;
CREATE TABLE cor_raca(
    cod_cor_raca INT(3),
    Cor_Raca VARCHAR(10),

    CONSTRAINT cor_raca_pk PRIMARY KEY(cod_cor_raca)
);

DROP TABLE IF EXISTS estado_civil;
CREATE TABLE estado_civil(
    cod_estado_civil INT(3),
    Estado_Civil VARCHAR(13),

    CONSTRAINT estado_civil_pk PRIMARY KEY(cod_estado_civil)

);

DROP TABLE IF EXISTS grau_instrucao;
CREATE TABLE grau_instrucao(
    cod_grau_instrucao INT(3),
    Grau_Instrucao VARCHAR(29),

    CONSTRAINT grau_instrucao_pk PRIMARY KEY(cod_grau_instrucao)

);

DROP TABLE IF EXISTS ocupacao;
CREATE TABLE ocupacao(
    cod_ocupacao INT(3),
    Ocupacao VARCHAR(70),

    CONSTRAINT ocupacao_pk PRIMARY KEY(cod_ocupacao)

);

DROP TABLE IF EXISTS partidos;
CREATE TABLE partidos(
    Partido INT(2),
    Sigla VARCHAR(20),
    Nome_Partido VARCHAR(50),

    CONSTRAINT partidos_pk PRIMARY KEY(Partido)

);

DROP TABLE IF EXISTS situacao;
CREATE TABLE situacao(
    cod_situacao INT(2),
    Situacao VARCHAR(21),

    CONSTRAINT situacao_pk PRIMARY KEY(cod_situacao)

);

DROP TABLE IF EXISTS situacao;
CREATE TABLE situacao(
    cod_situacao INT(2),
    Situacao VARCHAR(21),

    CONSTRAINT cor_raca_pk PRIMARY KEY(cod_cor_raca)

);

DROP TABLE IF EXISTS dep_federal;
CREATE TABLE dep_federal(
    ID VARCHAR(12),
    Nome_urna VARCHAR(50),
    Numero INT(4),
    Nome_Completo VARCHAR(70),
    Genero VARCHAR(5),
    Data_Nascimento VARCHAR(10),
    Titulo_Eleitor INT(12),
    CPF INT(11),
    UF_Nascimento VARCHAR(2),
    Nome_Municipio_Nascimento VARCHAR(50),
    Local_Candidatura VARCHAR(10),
    Ultima_Atualizacao VARCHAR(10),
    Foto_Url VARCHAR(300),
    Flag_Concorrendo VARCHAR(11),
    Coligacao VARCHAR(150),
    Total_Bens DECIMAL(20,2),
    Partido INT(2),
    Email VARCHAR(50),
    Situacao_Ficha_Limpa INT(1),
    Situacao_Abuso_Poder INT(1),
    Flag_Divulga_Bens INT(1),
    Flag_Reeleicao INT(1),
    cod_estado_civil INT(3),
    cod_cor_raca INT(3),
    cod_situacao INT(3),
    cod_nacionalidade INT(3),
    cod_grau_instrucao INT(3),
    cod_ocupacao INT(3),

    CONSTRAINT dep_federal_pk PRIMARY KEY(ID)

);
