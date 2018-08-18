import { Component, OnInit, Input } from '@angular/core';
import { CandidatesService } from "../services/candidates.service";
import { TitleCasePipe } from "../pipes/title-case"

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  @Input() filter: any;

  candidates: any;

  titleCasePipe = new TitleCasePipe();

  constructor (
   private candidatesService: CandidatesService
  ) { }

  ngOnInit() {
    this.candidatesService.getAllCandidates().subscribe(
      candidates => {
        this.candidates = candidates;
      }
    )

  }

}
