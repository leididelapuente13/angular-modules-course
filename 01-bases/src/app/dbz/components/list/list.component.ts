import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characters: Character[]  = [{name: 'Goku', power: 10000}, {name: 'Vegeta', power: 9000}];


  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    console.log(index);
  }
}
