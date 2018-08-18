# -*- coding: utf-8 -*-
import json
import sys
import urllib2

reload(sys)
sys.setdefaultencoding('utf8')

states = ["AC","AL","AP",'AM','BA', 'CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
selected_role = "deputado_federal"
roles = {}
roles['governador'] = 3
roles['vice_governador'] = 4 
roles['senador'] = 5
roles['deputado_federal'] = 6
roles['deputado_estadual'] = 7
roles['suplente1'] = 9 
roles['suplente2'] = 10


text = '"id";"nome";"estado"\n'
for state in states:
	print state
	url = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/' + state + '/2022802018/' + str(roles[selected_role]) + '/candidatos'
	req = urllib2.Request(url)

	response = urllib2.urlopen(req)

	candidatos = response.read()

	data = json.loads(candidatos)
	for candidato in data["candidatos"]:
		text +=  '"' + str(candidato["id"]) + '";'
		text += '"' + candidato["nomeCompleto"] + '";'
		text += '"' + state + '"\n'

	arq = open("id_nome_todos_estados_" + selected_role ,"w")
	arq.write(text)
	arq.close()
