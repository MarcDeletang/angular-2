import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContainerService } from './container.service';
import { InputItemComponent } from './input-item/input-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
