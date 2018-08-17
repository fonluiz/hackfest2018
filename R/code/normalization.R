library(tidyverse)
library(here)

## Lendo dados
dep_federal_original <- read.csv(here("data/info_dep_federal.csv"), stringsAsFactors = FALSE)

## Normalizando

## ESTADO CIVIL
cod_estado_civil <- dep_federal_original %>% 
  group_by(Estado_Civil) %>% 
  summarise(n = n()) %>% 
  tibble::rowid_to_column("cod_estado_civil") %>% 
  select(-n)

dep_federal_alt <- dep_federal_original %>%
  left_join(cod_estado_civil) %>% 
  select(-Estado_Civil)

## COR RAÇA
cod_cor_raca <- dep_federal_original %>% 
  group_by(Cor_Raca) %>% 
  summarise(n = n()) %>% 
  tibble::rowid_to_column("cod_cor_raca") %>% 
  select(-n)

dep_federal_alt <- dep_federal_alt %>%
  left_join(cod_cor_raca) %>% 
  select(-Cor_Raca)

## Situação
cod_situacao <- dep_federal_original %>% 
  group_by(Situacao) %>% 
  summarise(n = n()) %>% 
  tibble::rowid_to_column("cod_situacao") %>% 
  select(-n)

dep_federal_alt <- dep_federal_alt %>%
  left_join(cod_situacao) %>% 
  select(-Situacao)

## Nacionalidade
cod_nacionalidade <- dep_federal_original %>% 
  group_by(Nacionalidade) %>% 
  summarise(n = n()) %>% 
  tibble::rowid_to_column("cod_nacionalidade") %>% 
  select(-n)

dep_federal_alt <- dep_federal_alt %>%
  left_join(cod_nacionalidade) %>% 
  select(-Nacionalidade)

## Grau Instrução

cod_grau_instrucao <- dep_federal_original %>% 
  group_by(Grau_Instrucao) %>% 
  summarise(n = n()) %>% 
  tibble::rowid_to_column("cod_grau_instrucao") %>% 
  select(-n)

dep_federal_alt <- dep_federal_alt %>%
  left_join(cod_grau_instrucao) %>% 
  select(-Grau_Instrucao)

## Ocupação

cod_ocupacao <- dep_federal_original %>% 
  group_by(Ocupacao) %>% 
  summarise(n = n()) %>% 
  tibble::rowid_to_column("cod_ocupacao") %>% 
  select(-n)

dep_federal_alt <- dep_federal_alt %>%
  left_join(cod_ocupacao) %>% 
  select(-Ocupacao)

## Partido

cod_partido <- dep_federal_original %>% 
  group_by(Partido, Sigla, Nome_Partido) %>% 
  summarise(n = n()) %>% 
  select(-n)
  
dep_federal_alt <- dep_federal_alt %>%
  left_join(cod_partido) %>% 
  select(-c(Sigla, Nome_Partido))

## Escrevendo CSVs

write.csv(cod_estado_civil, here("data/normalized/cod_estado_civil.csv"), row.names = FALSE)
write.csv(cod_cor_raca, here("data/normalized/cod_cor_raca.csv"), row.names = FALSE)
write.csv(cod_grau_instrucao, here("data/normalized/cod_grau_instrucao.csv"), row.names = FALSE)
write.csv(cod_nacionalidade, here("data/normalized/cod_nacionalidade.csv"), row.names = FALSE)
write.csv(cod_ocupacao, here("data/normalized/cod_ocupacao.csv"), row.names = FALSE)
write.csv(cod_partido, here("data/normalized/cod_partido.csv"), row.names = FALSE)
write.csv(cod_situacao, here("data/normalized/cod_situacao.csv"), row.names = FALSE)
write.csv(dep_federal_alt, here("data/normalized/dep_federal.csv"), row.names = FALSE)




  