library(tidyverse)
library(here)

## Recupera dados de candidatos no TSE a partir de uma lista de ids na eleição
join_data <- function(list_id) {
  info_candidates <- ret_function(list_id[1])
  
  for (i in 2:length(list_id)) {
    candidate <- ret_function(list_id[i])
    
    info_candidates <- info_candidates %>% 
      rbind(candidate)
  }
  
  return(info_candidates)
}

## Lendo dados de id e nome
lista_dep_federal <- read_delim(here("data/id_nome.csv"), delim = ";", col_types = "cc")

## Processa para todos os ids de deputados recuperando informações cadastrais
info_dep_federal <- join_data(lista_dep_federal$id)

## Salva csv resultante
write_csv(info_dep_federal, here("data/info_dep_federal.csv"))
