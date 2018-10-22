import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { CandidatesService } from "../services/candidates.service";
import { TitleCasePipe } from "../pipes/title-case";
import { FilterCandidatesPipe } from "../pipes/filter-candidates";

@Component({
  selector: "app-candidates-list",
  templateUrl: "./candidates-list.component.html",
  styleUrls: ["./candidates-list.component.scss"]
})
export class CandidatesListComponent implements OnInit {
  @Input() filter: any;

  previousFilter = undefined;
  candidates: any;

  titleCasePipe = new TitleCasePipe();

  constructor(private candidatesService: CandidatesService) {}

  ngOnInit() {
    this.candidatesService.getAllCandidates().subscribe(candidates => {
      this.candidates = candidates;
    });
  }
}