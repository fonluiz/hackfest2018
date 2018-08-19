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

  constructor(
    private candidatesService: CandidatesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.candidateId = params['id'];
      this.candidatesService.getCandidate(this.candidateId).subscribe(
        cand => { 
          this.candidate = cand[0];
          console.dir(this.candidate);
        }
      );
    })
    
  }

}
