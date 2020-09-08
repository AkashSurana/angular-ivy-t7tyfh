import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MyDatePicker } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MyDatePicker, HelloComponent ],
  bootstrap:    [ MyDatePicker ]
})
export class AppModule { }
