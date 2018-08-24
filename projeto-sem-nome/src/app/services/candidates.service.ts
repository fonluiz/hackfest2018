import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private readonly url = environment.domain + 'api/';

  constructor(
    private http: HttpClient
  ) { }

  getAllCandidates() {
    return this.http.get(this.url + 'cadastrais');
  }

  getCandidate(id: string) {
    return this.http.get(this.url + 'deputado/' + id);
  }

  getPossessions(cpf: string): Observable<any> {
    return this.http.get(this.url + 'patrimonio/' + cpf);
  }

  getNumProposicoes(nome: string) {
    return this.http.get(this.url + 'proposicao/' + nome);
  }

  getCarreira(idCandidato: string, idEleicao: string, estado = 'PB', ano = 2018): Observable<any> {
    return this.http.get('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/' +
        ano + '/' + estado + '/' + idEleicao + '/candidato/' + idCandidato)
      .pipe(
        map(res => res['eleicoesAnteriores'])
      );
  }
}
