import { Component } from "@angular/core";

@Component(
   { selector: 'app-counter',
    template: `
    <p>
  Counter {{ counter }}

  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="resetCounter()" >Reset</button>
  <button (click)="increaseBy(-1)" >-1</button>
</p>
<hr>

    `,}
)
export class CounterComponent {
    public counter: number = 19;

    increaseBy( value: number ):void {
      this.counter+=value;
    }
  
    resetCounter( ):void {
      this.counter=19
    }
}