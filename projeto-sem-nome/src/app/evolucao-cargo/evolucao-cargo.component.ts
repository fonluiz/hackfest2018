import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: "app-evolucao-cargo",
  templateUrl: "./evolucao-cargo.component.html",
  styleUrls: ["./evolucao-cargo.component.scss"]
})
export class EvolucaoCargoComponent implements OnInit {
  @Input()
  cpf: string;

  public graph: any;

  constructor(private candidatesService: CandidatesService) {}

  ngOnInit() {
    this.graph = {
      data: [
        {
          x: [
            "2000",
            "2002",
            "2004",
            "2006",
            "2008",
            "2010",
            "2012",
            "2014",
            "2016"
          ],
          y: [1, 1, 2, 4, 4, 5, 5, 6, 6],
          type: "scatter",
          mode: "lines",
          line: { shape: "hvh" },
          marker: { color: "blue" }
        }
      ],
      layout: {
        width: "60%",
        height: 500,
        margin: {
          l: 125
        },
        title: "Cargos",
        yaxis: {
          tickmode: "array",
          tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
          ticktext: [
            "Nenhum",
            "Vereador",
            "Prefeito",
            "Deputado Estadual",
            "Deputado Federal",
            "Senador",
            "Governador",
            "Presidente"
          ]
        }
      }
    };
  }
}
