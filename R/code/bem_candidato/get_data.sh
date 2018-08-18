#!/bin/bash

echo "Baixando dados do TSE"
for ano in 2000 2002 2004 2006 2008 2010 2012 2014 2016; do 
	echo "Eleição de $ano"
	curl -o bem_candidato_${ano}.zip http://agencia.tse.jus.br/estatistica/sead/odsele/bem_candidato/bem_candidato_${ano}.zip
done
