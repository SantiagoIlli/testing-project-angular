import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
