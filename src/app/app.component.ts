import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-project';

  counter:number = 0;
  public ngIfValue: boolean;

  changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('fuinciona', this.ngIfValue);
  }

  CounterClick(counter: number): void {
    this.counter++;
    console.log(`la cuenta va en ${this.counter}`);
  }
}
