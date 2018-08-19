import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: "app-evolucao-patrimonio",
  templateUrl: "./evolucao-patrimonio.component.html",
  styleUrls: ["./evolucao-patrimonio.component.scss"]
})
export class EvolucaoPatrimonioComponent implements OnInit {
  @Input()
  cpf: string;

  public graph: any;

  constructor(private candidatesService: CandidatesService) {}

  ngOnInit() {
    this.graph = {
      data: [
        {
          x: ["2006", "2008", "2010", "2012", "2014", "2016"],
          y: [10000, 45000.54, 45000.54, 500000, 700000, 1000000],
          type: "scatter",

          line: { shape: "spline" },
          mode: "lines+markers",
          marker: { color: "red" }
        }
      ],
      layout: { width: "60%", height: 350, title: "Patrimônio" }
    };
  }
}
