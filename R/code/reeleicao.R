ibrary(dplyr)
library (plyr)
library("rjson")


trata_dato <- function(id_candidato) {
  
  json <- paste0(paste0("http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/PB/2022802018/candidato/", id_candidato), ".json")
  
  json_file <- json
  json_data <- fromJSON(paste(readLines(json_file), collapse=""))
  
  data_frame <- data.frame("ID" = json_data$id, "Nome_Urna" = json_data$nomeUrna, "Numero" = json_data$numero, "Nome_Completo" = json_data$nomeCompleto, "Genero" = json_data$descricaoSexo, "Data_Nascimento" = json_data$dataDeNascimento, "Titulo_Eleitor" = json_data$tituloEleitor, "CPF" =  json_data$cpf, "Estado_Civil" = json_data$descricaoEstadoCivil, "Cor_Raca" =  json_data$descricaoCorRaca, "Situacao" =  json_data$descricaoSituacao, "Nacionalidade" = json_data$nacionalidade, "Grau_Instrucao" = json_data$grauInstrucao, "Ocupacao" = json_data$ocupacao, "UF_Nascimento" = json_data$sgUfNascimento, "Nome_Municipio_Nascimento" = json_data$nomeMunicipioNascimento, "Local_Candidatura" = json_data$localCandidatura, "Ultima_Atualzacao" = json_data$dataUltimaAtualizacao, "Foto_Url" =  json_data$fotoUrl, "Flag_Concorrendo" = json_data$descricaoTotalizacao, "Coligacao" = json_data$composicaoColigacao,  "Total_Bens" = json_data$totalDeBens, "Partido" = json_data$partido$numero, "Sigla" = json_data$partido$sigla, "Nome_Partido" = json_data$partido$nome, "Email" = toString(json_data$emails), "Situacao_Ficha_Limpa" = json_data$st_MOTIVO_FICHA_LIMPA, "Situacao_Abuso_Pode" = json_data$st_MOTIVO_ABUSO_PODER, "Flag_Divulga_Bens" = json_data$st_DIVULGA_BENS, "Flag_Reeleicao" = json_data$st_REELEICAO)
  
  ## Olha apenas para a última eleicao que ele participou. Fazer isso de forma recursiva
  
  list <- json_data$eleicoesAnteriores[[2]]
  
  link_eleicao_anterior <- list$txLink
  
  if (grepl("2014", link_eleicao_anterior)){
    fim_json <- substr(link_eleicao_anterior, 61, 110)
    
    json_2014 <- "http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2014"
    
    list_fim_json <- unlist(strsplit(fim_json, "/", fixed = FALSE, perl = FALSE, useBytes = FALSE))
    
    path_new_json <- paste0(json_2014, "/", list_fim_json[3], "/", list_fim_json[2], "/candidato/", list_fim_json[4], ".json")
    
    json_data <- fromJSON(paste(readLines(path_new_json), collapse=""))
  }
  
  data_frame_2 <- data.frame("ID_2" = json_data$id, "Nome_Urna_2" = json_data$nomeUrna, "Numero_2" = json_data$numero, "Nome_Completo_2" = json_data$nomeCompleto, "Genero_2" = json_data$descricaoSexo, "Data_Nascimento_2" = json_data$dataDeNascimento, "Titulo_Eleitor_2" = json_data$tituloEleitor, "CPF_2" =  json_data$cpf, "Estado_Civil_2" = json_data$descricaoEstadoCivil, "Cor_Raca_2" =  json_data$descricaoCorRaca, "Situacao_2" =  json_data$descricaoSituacao, "Nacionalidade_2" = json_data$nacionalidade, "Grau_Instrucao_2" = json_data$grauInstrucao, "Ocupacao_2" = json_data$ocupacao, "UF_Nascimento_2" = json_data$sgUfNascimento, "Nome_Municipio_Nascimento_2" = json_data$nomeMunicipioNascimento, "Local_Candidatura_2" = json_data$localCandidatura, "Ultima_Atualzacao_2" = json_data$dataUltimaAtualizacao, "Foto_Url_2" =  json_data$fotoUrl, "Flag_Concorrendo_2" = json_data$descricaoTotalizacao, "Coligacao_2" = json_data$composicaoColigacao,  "Total_Bens_2" = json_data$totalDeBens, "Partido_2" = json_data$partido$numero, "Sigla_2" = json_data$partido$sigla, "Nome_Partido_2" = json_data$partido$nome, "Email_2" = toString(json_data$emails), "Situacao_Ficha_Limpa_2" = json_data$st_MOTIVO_FICHA_LIMPA, "Situacao_Abuso_Pode_2" = json_data$st_MOTIVO_ABUSO_PODER, "Flag_Divulga_Bens_2" = json_data$st_DIVULGA_BENS, "Flag_Reeleicao_2" = json_data$st_REELEICAO)
  
  df <- cbind(data_frame, data_frame_2)
  
  return(df)
  
}