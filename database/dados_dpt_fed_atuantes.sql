USE hackfest_db;

DROP TABLE IF EXISTS dep_fed_atuais;
CREATE TABLE dep_fed_atuais(
    ideCadastro INT(6),
    codOrcamento INT(13),
    condicao VARCHAR(8),
    matricula VARCHAR(3),
    idParlamentar INT(10),
    nome VARCHAR(50),
    nomeParlamentar VARCHAR(50),
    urlFoto VARCHAR(100),
    sexo VARCHAR(9),
    uf VARCHAR(2),
    partido VARCHAR(6),
    gabinete VARCHAR(3),
    anexo INT(3),
    fone VARCHAR(9),
    email VARCHAR(100),

    CONSTRAINT ideCadastro_pk PRIMARY KEY(ideCadastro)
);