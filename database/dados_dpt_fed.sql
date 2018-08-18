DROP DATABASE IF EXISTS hackfest_db;
CREATE DATABASE hackfest_db;
USE hackfest_db;

DROP TABLE IF EXISTS cod_cor_raca;
CREATE TABLE cod_cor_raca(
    cod_cor_raca INT(3),
    Cor_Raca VARCHAR(10),

    CONSTRAINT cor_raca_pk PRIMARY KEY(cod_cor_raca)
);

DROP TABLE IF EXISTS cod_estado_civil;
CREATE TABLE cod_estado_civil(
    cod_estado_civil INT(3),
    Estado_Civil VARCHAR(13),

    CONSTRAINT estado_civil_pk PRIMARY KEY(cod_estado_civil)

);

DROP TABLE IF EXISTS cod_grau_instrucao;
CREATE TABLE cod_grau_instrucao(
    cod_grau_instrucao INT(3),
    Grau_Instrucao VARCHAR(29),

    CONSTRAINT grau_instrucao_pk PRIMARY KEY(cod_grau_instrucao)

);

DROP TABLE IF EXISTS cod_ocupacao;
CREATE TABLE cod_ocupacao(
    cod_ocupacao INT(3),
    Ocupacao VARCHAR(70),

    CONSTRAINT ocupacao_pk PRIMARY KEY(cod_ocupacao)

);

DROP TABLE IF EXISTS cod_partido;
CREATE TABLE cod_partido(
    Partido INT(2),
    Sigla VARCHAR(20),
    Nome_Partido VARCHAR(50),

    CONSTRAINT partidos_pk PRIMARY KEY(Partido)

);

DROP TABLE IF EXISTS cod_situacao;
CREATE TABLE cod_situacao(
    cod_situacao INT(2),
    Situacao VARCHAR(21),

    CONSTRAINT situacao_pk PRIMARY KEY(cod_situacao)

);

DROP TABLE IF EXISTS cod_nacionalidade;
CREATE TABLE cod_nacionalidade(
    cod_nacionalidade INT(2),
    Nacionalidade VARCHAR(50),

    CONSTRAINT cod_nacionalidade_pk PRIMARY KEY(cod_nacionalidade)

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

    CONSTRAINT dep_federal_pk PRIMARY KEY(ID),

    CONSTRAINT cod_estado_civil_fk FOREIGN KEY(cod_estado_civil) REFERENCES cod_estado_civil(cod_estado_civil),
    CONSTRAINT cod_cor_raca_fk FOREIGN KEY(cod_cor_raca) REFERENCES cod_cor_raca(cod_cor_raca),
    CONSTRAINT cod_situacao_fk FOREIGN KEY(cod_situacao) REFERENCES cod_situacao(cod_situacao),
    CONSTRAINT cod_nacionalidade_fk FOREIGN KEY(cod_nacionalidade) REFERENCES cod_nacionalidade(cod_nacionalidade),
    CONSTRAINT cod_grau_instrucao_fk FOREIGN KEY(cod_grau_instrucao) REFERENCES cod_grau_instrucao(cod_grau_instrucao),
    CONSTRAINT cod_ocupacao_fk FOREIGN KEY(cod_ocupacao) REFERENCES cod_ocupacao(cod_ocupacao),
    CONSTRAINT Partido_fk FOREIGN KEY(Partido) REFERENCES cod_partido(Partido)

);
