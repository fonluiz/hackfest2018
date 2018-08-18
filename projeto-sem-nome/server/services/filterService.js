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
                    filtros = filtros + columns[indice] + ' = ?';    
                } else {
                    filtros = filtros + ' AND ' + columns[indice] + ' = ?';    
                }
            }
        });

        query = "SELECT * from dep_federal WHERE " + filtros;

        return query;
    }
}