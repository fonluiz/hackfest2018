import { Component, Input, OnChanges } from '@angular/core';
import { CandidatesService } from '../services/candidates.service';

@Component({
  selector: 'app-evolucao-cargo',
  templateUrl: './evolucao-cargo.component.html',
  styleUrls: ['./evolucao-cargo.component.scss']
})
export class EvolucaoCargoComponent implements OnChanges {

  @Input() cpf: string;

  public graph: any;

  constructor(private candidatesService: CandidatesService) {}

  ngOnChanges() {
    this.candidatesService.getCarreira('150000625013', '2022802018').subscribe(eleicao_ant => {
      const cargos_eleicoes = eleicao_ant
        .map(ea => [ea.nrAno, ea.cargo]);

      const mapCargosCodigos = {
        'Nenhum': 0,
        'Vereador': 1,
        'Prefeito': 2,
        'Deputado Estadual': 3,
        'Deputado Federal': 4,
        'Senador': 5,
        'Governador': 6,
        'Presidente': 7
      };

      for (let i = 0; i < cargos_eleicoes.length; i++) {
        cargos_eleicoes[i][1] = mapCargosCodigos[cargos_eleicoes[i][1]];
      }

      const pontos = [[], []];
      for (let i = 0; i < cargos_eleicoes.length; i++) {
        pontos[0] = pontos[0].concat(cargos_eleicoes[i][0]);
        pontos[1] = pontos[1].concat(cargos_eleicoes[i][1]);
      }

      this.graph = {
        data: [
          {
            x: pontos[0],
            y: pontos[1],
            type: 'scatter',
            mode: 'lines',
            line: {
              shape: 'hvh',
              width: 3
            },
            marker: { color: '#ffff00' }
          }
        ],
        layout: {
          width: '60%',
          height: 500,
          margin: {
            l: 200
          },
          title: 'Histórico de Cargos',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#fff'
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          yaxis: {
            tickmode: 'array',
            tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
            ticktext: [
              'Nenhum',
              'Vereador',
              'Prefeito',
              'Dep. Estadual',
              'Dep. Federal',
              'Senador',
              'Governador',
              'Presidente'
            ]
          },
          xaxis: {
            tickmode: 'array',
            tickvals: [2000, 2004, 2008, 2012, 2016]
          }
        }
      };

    });
  }
}
