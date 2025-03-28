import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false
})

export class DbzMainPageComponent{

  public characters : Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 9500
    },
    {
      name: 'Trunks',
      power: 8500
    }
  ]

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

}
