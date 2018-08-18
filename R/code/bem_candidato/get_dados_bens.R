library(dplyr)

get_bens_ano <- function(ano){
  path <- paste0("bem/bem_candidato_", ano)
  filenames <- list.files(path, pattern="*.txt", full.names=TRUE)
  
  df_aux <- data.frame(ANO_ELEICAO = numeric(), SQ_CANDIDATO = numeric(), dinheiros = numeric())
  for (file in filenames){
    df <- read.table(file, sep=";", quote="\"", comment.char="%")
    
    colnames(df) <- c("DATA_GERACAO", "HORA_GERACAO", "ANO_ELEICAO", "DESCRICAO_ELEICAO", "SIGLA_UF", "SQ_CANDIDATO", "CD_TIPO_BEM_CANDIDATO", "DS_TIPO_BEM_CANDIDATO", "DETALHE_BEM", "VALOR_BEM", "DATA_ULTIMA_ATUALIZACAO", "HORA_ULTIMA_ATUALIZACAO")
    
    df_2 <- df %>%
      group_by(ANO_ELEICAO, SQ_CANDIDATO) %>%
      summarise(dinheiros=sum(VALOR_BEM))
    
    df_aux <- bind_rows(df_aux, df_2)
  }
  df_aux
}


df_aux <- data.frame()
for (ano in c("2006", "2008", "2010", "2012", "2014", "2016")){
  ano_temp <- get_bens_ano(ano)
  df_aux <- bind_rows(df_aux, ano_temp)
}

write.csv2(df_aux, file = "bens_eleicao_candidato.csv", sep = ";", row.names = F)