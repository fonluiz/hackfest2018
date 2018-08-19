import { Component, OnInit } from "@angular/core";
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: "app-evolucao-patrimonio",
  templateUrl: "./evolucao-patrimonio.component.html",
  styleUrls: ["./evolucao-patrimonio.component.scss"]
})
export class EvolucaoPatrimonioComponent implements OnInit {
  private dados_patrimonio: any;
  public anos: any;
  public patrimonio: any;
  private cpf: "00005771625";
  public graph = {
    data: [
      {
        x: [2006, 2008, 2010, 2012, 2014, 2016],
        y: [10000, 300000, 2034000, 30004, 2323233, 200334],
        type: "scatter",
        mode: "lines+markers",
        line: { shape: "spline" },
        marker: { color: "red" }
      }
    ],
    layout: { width: "60%", height: 350, title: "Patrimônio" }
  };

  constructor(private candidatesService: CandidatesService) {}

  ngOnInit() {
    this.candidatesService
      .getPatrimonioCandidato("00005771625")
      .subscribe(patrimonio => {
        this.dados_patrimonio = patrimonio;
      });

    console.log(this.patrimonio);
  }
}
