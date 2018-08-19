import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCandidates'
})

export class FilterCandidatesPipe implements PipeTransform {

  transform(items: any, filter: any): any[] {
    if (!items) {
      return [];
    }

    if (!filter) {
      return items;
    }

    let result = items;
    console.log(filter.Genero)
    if (filter.Genero) {
      console.log(filter.Genero.toLowerCase());
      result = result.filter( cand => {        
        return cand.Genero.toLowerCase() == filter.Genero.toLowerCase();
      });
    }

    if (filter.Cor_Raca) {
      result = result.filter( cand => {
        return cand.Cor_Raca.toLowerCase() == filter.Cor_Raca.toLowerCase();
      });
    }

    if (filter.Grau_Instrucao) {
      result = result.filter( cand => {
        return cand.Grau_Instrucao.toLowerCase() == filter.Grau_Instrucao.toLowerCase();
      });
    }
    
    return result;
   }
}