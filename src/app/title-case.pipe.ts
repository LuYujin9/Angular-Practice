import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    /*   words = words.map((word) => {
      if (word === words[0]) return this.toTitleCase(word);
      if (this.isPrepositon(word)) return word.toLowerCase();
      return this.toTitleCase(word);
    }); */
    for (var i = 0; i < words.length; i++) {
      if (i > 0 && this.isPrepositon(words[i]))
        words[i] = words[i].toLowerCase();
      else words[i] = this.toTitleCase(words[i]);
    }
    return words.join(' ');
  }
  // 在ts里建立一些function来简化代码.
  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
  }

  private isPrepositon(word: string): boolean {
    const prepositions = ['the', 'of'];
    return prepositions.includes(word.toLowerCase());
  }
}
