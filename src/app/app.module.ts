import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonRodriComponent } from './button-rodri/button-rodri.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonRodriComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
