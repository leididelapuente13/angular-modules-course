import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void{
    console.log(this.character);

    if(this.character.name.trim().length === 0) return;
    if(this.character.power < 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }

}
