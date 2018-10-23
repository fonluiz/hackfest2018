# -*- coding: utf-8 -*-

import json
import requests

states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
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
	print(state)
	url = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/' + state + '/2022802018/' + str(roles[selected_role]) + '/candidatos'

	response = requests.get(url)

	data = json.loads(response.content.decode('utf-8'))
	for candidato in data["candidatos"]:
		text +=  '"' + str(candidato["id"]) + '";'
		text += '"' + candidato["nomeCompleto"] + '";'
		text += '"' + state + '"\n'

	arq = open('id_nome_todos_estados_' + selected_role + '.csv' ,'w')
	arq.write(text)
	arq.close()
