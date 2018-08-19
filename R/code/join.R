library(tidyverse)
library(here)
library(jsonlite)

recupera_dados <- function(id_candidato, estado) {
  url <- paste0("http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/",estado)
  url <- paste0(url,"/2022802018/candidato/")
  json <- paste0(paste0(url, id_candidato), ".json")
  message(json)
  
  json_file <- json
  json_data <- fromJSON(paste(readLines(json_file), collapse=""))
  
  data_selected <- data.frame("ID" = json_data$id, "Nome_Urna" = json_data$nomeUrna, "Numero" = json_data$numero, 
                              "Nome_Completo" = json_data$nomeCompleto, "Genero" = json_data$descricaoSexo, 
                              "Data_Nascimento" = json_data$dataDeNascimento, "Titulo_Eleitor" = json_data$tituloEleitor, 
                              "CPF" =  json_data$cpf, "Estado_Civil" = json_data$descricaoEstadoCivil, 
                              "Cor_Raca" =  json_data$descricaoCorRaca, "Situacao" =  json_data$descricaoSituacao, 
                              "Nacionalidade" = json_data$nacionalidade, "Grau_Instrucao" = json_data$grauInstrucao, 
                              "Ocupacao" = json_data$ocupacao, "UF_Nascimento" = json_data$sgUfNascimento, 
                              "Nome_Municipio_Nascimento" = json_data$nomeMunicipioNascimento, 
                              "Local_Candidatura" = json_data$localCandidatura, "Sigla_Local" = estado, "Ultima_Atualzacao" = json_data$dataUltimaAtualizacao, 
                              "Foto_Url" =  json_data$fotoUrl, "Flag_Concorrendo" = json_data$descricaoTotalizacao, 
                              "Coligacao" = json_data$composicaoColigacao,  "Total_Bens" = json_data$totalDeBens, 
                              "Partido" = json_data$partido$numero, "Sigla" = json_data$partido$sigla, 
                              "Nome_Partido" = json_data$partido$nome, "Email" = toString(json_data$emails), 
                              "Situacao_Ficha_Limpa" = json_data$st_MOTIVO_FICHA_LIMPA, "Situacao_Abuso_Pode" = json_data$st_MOTIVO_ABUSO_PODER, 
                              "Flag_Divulga_Bens" = json_data$st_DIVULGA_BENS, "Flag_Reeleicao" = json_data$st_REELEICAO)
  
  data_frame <- data_selected %>% 
    distinct(ID, .keep_all = TRUE)
  
  return(data_frame)
  
}

## Recupera dados de candidatos no TSE a partir de uma lista de ids na eleição
join_data <- function(list_id, list_estado) {
  info_candidates <- recupera_dados(list_id[1], list_estado[1])
  
  for (i in 2:length(list_id)) { ## 2:length
    print(i)
    candidate <- recupera_dados(list_id[i], list_estado[i])
    
    info_candidates <- info_candidates %>% 
      rbind(candidate)
  }
  
  return(info_candidates)
}

## Lendo dados de id e nome
lista_dep_federal <- read_delim(here("data/id_nome_estado.csv"), delim = ";", col_types = "ccc") %>% 
  filter(estado == "PB")
  
## Processa para todos os ids de deputados recuperando informações cadastrais
info_dep_federal <- join_data(lista_dep_federal$id, lista_dep_federal$estado) 

info_dep_federal <- info_dep_federal %>% 
  mutate(ID = as.character(ID), CPF = as.character(CPF))

## Salva csv resultante
write.csv(info_dep_federal, here("data/info_dep_federal.csv"), row.names = FALSE)
