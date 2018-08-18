import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private readonly url = environment.domain + 'api/';

  constructor(
    private http: HttpClient
  ) { }

  getAllCandidates() {
    return this.http.get(this.url + '/cadastrais');
  }
}
