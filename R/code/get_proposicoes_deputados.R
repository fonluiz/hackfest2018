#install.packages(c("rcongresso", "httr", "tidyverse"))
library(httr)
library(tidyverse)
library(rcongresso)

# Filtra proposições importantes
tipo_prop <- c("PEC","PLP","PFC","SIT","SBT","EMO","PLC","PLN")
p_2015 <- fetch_proposicao(siglaTipo = tipo_prop,
                           dataApresentacaoInicio = "2015-01-01", 
                           dataApresentacaoFim = "2015-12-31")
p_2016 <- fetch_proposicao(siglaTipo = tipo_prop,
                           dataApresentacaoInicio = "2016-01-01", 
                           dataApresentacaoFim = "2016-12-31")
p_2017 <- fetch_proposicao(siglaTipo = tipo_prop,
                           dataApresentacaoInicio = "2017-01-01", 
                           dataApresentacaoFim = "2017-12-31")
p_2018 <- fetch_proposicao(siglaTipo = tipo_prop,
                           dataApresentacaoInicio = "2018-01-01", 
                           dataApresentacaoFim = "2018-12-31")
p_all <- p_2015 %>% rbind(p_2016, p_2017, p_2018)


proposicoes_importantes <- p_all %>% 
  select(id) %>%
  .[[1]]

proposicao_deputado <- data.frame(
  id_proposicao = integer(),
  id_autor = integer()
)

for (proposicao in proposicoes_importantes) {
  autores <- GET(paste0('https://dadosabertos.camara.leg.br/api/v2/proposicoes/', proposicao, '/autores')) %>%
    content('parsed')
  
  proposicao_deputado_item <- data.frame(
    id_proposicao = integer(),
    id_autor = integer()
  )
  
  for (autor in autores$dados) {
    uri <- autor$uri
    uri <- str_split(uri, '/')
    
    if(length(uri) > 0) {
      uri <- uri[[1]][7] %>% as.numeric()
      
      u <- data.frame(id_proposicao = proposicao, id_autor = uri)
      proposicao_deputado_item <- proposicao_deputado_item %>% bind_rows(u)
    }
  }
  
  proposicao_deputado <- proposicao_deputado %>% bind_rows(proposicao_deputado_item)
}

write_csv(proposicao_deputado, '../data/proposicao_deputado.csv')

