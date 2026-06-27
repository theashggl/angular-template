import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page/home-page.component';
import { KeyValuePipe, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root', //Notes What is defined here is the component name of this component that can be used somewhere else in an html file. Has to be unique
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, FormsModule, KeyValuePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  input = '';
  map = new Map();
  index = 1;
  onClick(): void {
    let word = '';
    this.map.clear();
    const addLetter = (i: number) => {
      const ithChar = this.input.charAt(i);
      if (
        (ithChar >= 'A' && ithChar <= 'Z') ||
        (ithChar >= 'a' && ithChar <= 'z')
      )
        word += ithChar;
      console.log(`character is: ${word}`);
    };
    for (let i = 0; i < this.input.length; i++) {
      if (
        this.input.charAt(i) == ' ' ||
        i == this.input.length - 1 ||
        this.input.charAt(i) == '.'
      ) {
        if (i == this.input.length - 1) addLetter(i);
        let tempVal = 0;
        if (this.map.size != 0) {
          tempVal = this.map.get(word);
          console.log(
            `tempVal: ${tempVal} ${this.map.keys} ${this.map.values} i: ${i}`,
          );
        }
        if (tempVal != undefined) tempVal++;
        else tempVal = 1;
        if (word.length != 0) this.map.set(word, tempVal);
        console.log(`word: ${word} value: ${this.map.get(word)}`);
        word = '';
      } else {
        addLetter(i);
        console.log(word);
      }
    }
  }
}
