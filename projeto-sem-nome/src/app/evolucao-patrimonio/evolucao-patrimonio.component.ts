import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-evolucao-patrimonio",
  templateUrl: "./evolucao-patrimonio.component.html",
  styleUrls: ["./evolucao-patrimonio.component.scss"]
})
export class EvolucaoPatrimonioComponent implements OnInit {
  public graph = {
    data: [
      {
        x: [2006, 2008, 2010, 2012, 2014, 2016],
        y: [20000, 30000, 12500, 40000, 100000, 0],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "red" }
      }
    ],
    layout: { width: "60%", height: 240, title: "Patrimônio" }
  };
  constructor() {}

  ngOnInit() {}
}
