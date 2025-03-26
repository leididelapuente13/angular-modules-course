import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <h2>{{ counter }}</h2>
    <button (click)="increaseCounterBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseCounterBy(1)">-1</button>
  `,
  standalone: false
})

export class Countercomponent {
  constructor() { }

  public counter: number = 10;

  increaseCounterBy(value: number): void {
    this.counter += value;
  }

  decreaseCounterBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
