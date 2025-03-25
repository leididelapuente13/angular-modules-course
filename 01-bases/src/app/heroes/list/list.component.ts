import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Batman', 'Spiderman', 'Ironman', 'Thor', 'Hulk', 'She-Hulk', 'Wonder woman'];
  public deletedHero?: string;
  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
