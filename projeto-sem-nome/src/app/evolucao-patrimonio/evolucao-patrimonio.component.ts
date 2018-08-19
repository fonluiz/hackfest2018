import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: "app-evolucao-patrimonio",
  templateUrl: "./evolucao-patrimonio.component.html",
  styleUrls: ["./evolucao-patrimonio.component.scss"]
})
export class EvolucaoPatrimonioComponent implements OnChanges {

  @Input() cpf: string;

  public graph: any;

  constructor(
    private candidatesService: CandidatesService
  ) {}

  ngOnChanges() {
    this.candidatesService.getPossessions(this.cpf).subscribe(poss => {
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
              mode: "lines+markers",
              marker: { color: "red" }
            }
          ],
          layout: { width: "60%", height: 240, title: "Patrimônio" }
        };
      
    });
  }
}
