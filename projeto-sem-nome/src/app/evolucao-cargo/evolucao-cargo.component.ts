import { Component, Input, OnChanges } from "@angular/core";
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: "app-evolucao-cargo",
  templateUrl: "./evolucao-cargo.component.html",
  styleUrls: ["./evolucao-cargo.component.scss"]
})
export class EvolucaoCargoComponent implements OnChanges {

  @Input() cpf: string;

  public graph: any;

  constructor(
    private candidatesService: CandidatesService
  ) {}

  ngOnChanges() {
    this.candidatesService.getCarreira(this.cpf).subscribe(poss => {
      console.log(poss)
      const points = poss.map(p => Object({ anoEleicao: p.anoEleicao, patrimonio: p.patrimonio }))
                  .map(p => [p.anoEleicao, p.patrimonio])
                  .reduce((acc, current) => [[current[0]].concat(acc[0]), [current[1]].concat(acc[1])], [])
                  .map(p => p.reverse());
                  
                  this.graph = {
                    data: [
                      {
                        x: points[0],
                        y: points[1],
                        type: "scatter",
                        mode: "lines",
                        line: { shape: "hvh" },
                        marker: { color: "blue" }
                      }
                    ],
                    layout: {
                      width: "60%",
                      height: 500,
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
    });
  }
}