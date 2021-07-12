import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-project';

  rodriObject = {
    value: 0
  };

  public arrayOfSrcs = ['assets/fixing-settings.png',
    'assets/footer-info.png',
    'assets/ox.png'];
  public ngIfValue: boolean;

  constructor() {
    console.log(this.arrayOfSrcs[3]);
  }

  changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('fuinciona', this.ngIfValue);
  }

  // counterClick(): void {
  //   this.counter++;
  //   console.log(`la cuenta va en ${this.counter}`);
  // }
}
