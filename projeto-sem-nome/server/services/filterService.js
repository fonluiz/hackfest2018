export class filterService {

    static getParametrosValidos(parameters) {
        let validParameters = [];                

        parameters.forEach(function (item, indice, array) {
            if (item !== undefined) {
                validParameters.push(item)
            }
        });
        console.log(validParameters)
        return validParameters;
    }

    static criaConsulta(parameters) {
        let columns = [
            "Genero",
            "cod_grau_instrucao",
            "cod_cor_raca",
            "novo",
            "estado",
            "cargo"
        ];

        let query;
        let filtros = ''; 

        parameters.forEach(function (item, indice, array) {            
            if (item !== undefined) {
                if (filtros === '') {
                    filtros = filtros + "d." + columns[indice] + ' = ?';    
                } else {
                    filtros = filtros + ' AND ' + "d." + columns[indice] + ' = ?';    
                }
            }
        });

        query = "SELECT * from dep_federal d, cod_grau_instrucao g, cod_cor_raca r, cod_ocupacao o, cod_estado_civil e WHERE " + filtros + "AND d.cod_grau_instrucao = g.cod_grau_instrucao AND d.cod_cor_raca = r.cod_cor_raca AND d.cod_ocupacao = o.cod_ocupacao AND d.cod_estado_civil = e.cod_estado_civil";

        return query;
    }
}