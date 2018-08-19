import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';

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
    return this.http.get(this.url + "proposicao/" + nome);
  }

  getCarreira(cpf: string): Observable<any> {
    return this.http.get(this.url + 'carreira/' + cpf);
  }
}
