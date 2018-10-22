import { Component, Input, OnChanges } from '@angular/core';
import { CandidatesService } from '../services/candidates.service';

@Component({
  selector: 'app-evolucao-patrimonio',
  templateUrl: './evolucao-patrimonio.component.html',
  styleUrls: ['./evolucao-patrimonio.component.scss']
})
export class EvolucaoPatrimonioComponent implements OnChanges {

  @Input() cpf: string;

  public graph: any;

  constructor(private candidatesService: CandidatesService) {}

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
              type: 'scatter',
              line: { shape: 'spline' },
              mode: 'lines+markers',
              marker: { color: '#00ffff' }
            }
          ],
          layout: {
            width: '60%',
            height: 350,
            title: 'Evolução do Patrimônio',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#fff'
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: {
              tickmode: 'array',
              tickvals: [2000, 2004, 2008, 2012, 2016]
            }
          },
          config: {
            displayModeBar: false
          }
        };
    });
  }
}
