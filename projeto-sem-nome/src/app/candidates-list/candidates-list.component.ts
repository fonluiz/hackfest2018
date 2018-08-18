import { Component, OnInit } from '@angular/core';
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  candidates: any;

  constructor (
   private candidatesService: CandidatesService
  ) { }

  ngOnInit() {
    this.candidatesService.getAllCandidates().subscribe(
      candidates => {
        this.candidates = candidates;

        for (var i = 0; i < this.candidates.length; i++) {
          console.log(this.candidates[i].Nome_urna)          
        }
        console.log(candidates);
      }
    )

  }

}
