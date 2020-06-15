import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { RadioButtonsComponent } from './controls/radio-buttons/radio-buttons.component';
import { SelectComponent } from './controls/select/select.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, TextboxComponent, RadioButtonsComponent, SelectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
