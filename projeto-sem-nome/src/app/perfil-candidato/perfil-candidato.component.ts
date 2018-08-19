import { Component, OnInit, Input } from '@angular/core';
import { CandidatesService } from '../services/candidates.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Location } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.scss']
})
export class PerfilCandidatoComponent implements OnInit {

  candidateId: string;
  candidate: any;
  numProposicoes: any;

  constructor(
    private candidatesService: CandidatesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.candidateId = params["id"];
      this.candidatesService.getCandidate(this.candidateId).subscribe(cand => {
        this.candidate = cand[0];
        this.calcula_proposicoes(this.candidate.Nome_Completo);
      });
    });
  }

  calcula_proposicoes(nome: string) {
    // let nome = "MARIA LAURA MONTEZA DE SOUZA CARNEIRO";
    this.route.params.subscribe(params => {
      this.candidatesService.getNumProposicoes(nome).subscribe(prop => {
        let propArray = <Array<any>>prop;
        if (propArray.length === 0) {
          this.numProposicoes = 0;
        } else {
          this.numProposicoes = prop[0].numero_proposicoes;
        }
      });
    });
  }
}
