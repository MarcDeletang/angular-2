import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutputChildComponent } from './input-output-child/input-output-child.component';
import { LowerPipe } from './lower.pipe';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
import { InputProductComponent } from './input-product/input-product.component';

import { Restaurant } from './data/restaurant'
import { Store } from './data/store'

@Injectable()
export class Test{
	constructor(){
		console.log('Test constructed')
	}
}
@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    InputOutputChildComponent,
    LowerPipe,
    FormComponent,
    HighlightDirective,
    InputProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Restaurant, Store, Test],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(test: Test){
	}
}
