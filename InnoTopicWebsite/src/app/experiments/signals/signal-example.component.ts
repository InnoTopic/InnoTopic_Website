import { Component, Signal, signal } from '@angular/core'

@Component({
  selector: 'app-signal-example',
  template: `
    <h2>Angular Signals Example</h2>
<!--    <p>Count: {{ count() }}</p>-->
    <p>Count: {{ countSignal() }}</p>
    <button (click)="increment()">Increment</button>

    <button (click)="decrement()">Decrement</button>
  `,
})
export class SignalExampleComponent {
  countSignal = signal(0)
  // readonly count = this.countSignal.asImmutable()

  increment() {
    this.countSignal.update((value) => value + 1)
  }

  decrement() {
    this.countSignal.update((value) => value - 1)
  }
}
