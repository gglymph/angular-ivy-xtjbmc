import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, TextboxComponent, RadioButtonsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
