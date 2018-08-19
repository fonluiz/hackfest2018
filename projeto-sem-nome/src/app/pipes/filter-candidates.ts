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

    if (filter.Genero) {
      result = result.filter( cand => {
        return cand.Genero.toLowerCase() == filter.Genero.toLowerCase();
      });
    }

    if (filter.Cor_Raca) {
      result = result.filter( cand => {
        return cand.Cor_Raca.toLowerCase() == filter.Cor_Raca.toLowerCase();
      });
    }

    return result;
   }
}