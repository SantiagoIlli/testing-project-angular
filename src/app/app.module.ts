import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonRodriComponent } from './button-rodri/button-rodri.component';
import { CounterClickDirective } from './counter-click.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ButtonRodriComponent,
    CounterClickDirective
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
