USE hackfest_db;

DROP TABLE IF EXISTS bens_candidatos;
CREATE TABLE bens_candidatos(
    anoEleicao INT(4),
    cpfCandidato VARCHAR(15),
    sequencialCandidato INT(10),
    siglaUF VARCHAR(2),
    patrimonio DECIMAL(20),

    CONSTRAINT bens_candidatos_pk PRIMARY KEY(anoEleicao),
    CONSTRAINT bens_candidatos_pk PRIMARY KEY(cpfCandidato)
);