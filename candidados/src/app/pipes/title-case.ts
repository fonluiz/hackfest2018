import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) { return null; }

    // Assert that value really is a string since this can receive
    // an 'any' typed numeric variable
    value = value.toString();

    const words = value.split(' ');
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      if (index > 0 && this.isPreposition(word)) {
        words[index] = word.toLowerCase();
      } else {
        words[index] = this.toTitleCase(word);
      }
    }
    return words.join(' ');

  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    const lowerCaseWords = ['de', 'da', 'do', 'dos', 'das', 'e', 'no', 'na'];
    return lowerCaseWords.includes(word.toLowerCase());
  }

}
