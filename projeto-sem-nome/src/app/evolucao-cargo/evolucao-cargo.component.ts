import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-evolucao-cargo",
  templateUrl: "./evolucao-cargo.component.html",
  styleUrls: ["./evolucao-cargo.component.scss"]
})
export class EvolucaoCargoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public graph = {
    data: [
      {
        x: [2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
        y: [0, 0, 2, 3, 4, 4, 6],
        type: "scatter",
        mode: "lines+markers",
        line: { shape: "hvh" },
        marker: { color: "blue" }
      }
    ],
    layout: {
      width: "60%",
      height: 500,
      title: "Cargos",
      margin: {
        l: 125
      },
      yaxis: {
        autotick: false,
        ticks: "outside",
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
