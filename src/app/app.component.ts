import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-project';

  public myArray = ['https://concepto.de/wp-content/uploads/2018/10/URL1-e1538664726127.jpg',
    'https://rockcontent.com/es/wp-content/uploads/sites/3/2018/07/Encurtadores-de-URL-1024x538.png']
  public ngIfValue: boolean;

  changeNgIfValue(): void {
    this.ngIfValue = !this.ngIfValue;
    console.log('fuinciona', this.ngIfValue);
  }
}
