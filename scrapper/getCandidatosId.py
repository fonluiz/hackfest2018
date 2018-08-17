# -*- coding: utf-8 -*-
import json
import sys
import urllib2

reload(sys)
sys.setdefaultencoding('utf8')


state = "PB"
selected_role = "deputado_federal"
roles = {}
roles['governador'] = 3
roles['vice_governador'] = 4 
roles['senador'] = 5
roles['deputado_federal'] = 6
roles['deputado_estadual'] = 7
roles['suplente1'] = 9 
roles['suplente2'] = 10
url = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/' + state + '/2022802018/' + str(roles[selected_role]) + '/candidatos'

req = urllib2.Request(url)

response = urllib2.urlopen(req)

candidatos = response.read()

json = json.loads(candidatos)

text = '"id";"nome"\n'
for candidato in json["candidatos"]:
	text +=  '"' + str(candidato["id"]) + '";'
	text += '"' + candidato["nomeCompleto"] + '"\n'

arq = open("candidato_id_nome_"+ selected_role + "_" + state ,"w")
arq.write(text)
arq.close()
