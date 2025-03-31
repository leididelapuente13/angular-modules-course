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
  public characters: Character[]  = [{id: 'abc' ,name: 'Goku', power: 10000}, {id: 'def', name: 'Vegeta', power: 9000}];


  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  emitCharacterId(id: string): void {
    this.onDelete.emit(id);
  }

}
