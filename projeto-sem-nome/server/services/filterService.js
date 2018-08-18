export class filterService {
    static criaConsulta(req) {
        let parameters = [req.query.genero, req.query.escolaridade, req.query.corRaca, req.query.novo, req.query.estado, req.query.cargo];
        console.log(parameters);        
    }
}