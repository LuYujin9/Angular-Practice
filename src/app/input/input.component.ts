import { Component } from '@angular/core';

@Component({
  selector: 'aaaaa',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  inputText = '';
  title = '';

  onKeyUp() {
    const splitedwords = this.inputText.toLowerCase().split(' ');
    const inicialCaseWords = splitedwords.map((word) => {
      const newWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      if (word === splitedwords[0]) return newWord;
      else if (word === 'the' || word === 'of') {
        return word;
      } else return newWord;
    });
    this.title = inicialCaseWords.join(' ');
  }
}
