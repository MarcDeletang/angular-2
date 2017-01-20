import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html'
})
export class AppComponent {
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'firstName' : ['this is a test', Validators.required],
      'lastName': [true,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [42, Validators.required],
      'hiking' : [false],
      'running' : [false],
      'swimming' : [false]
    })
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form)
    })
  }

  submitForm(value: any){
    this.complexForm.value
    console.log('submit:', value)
    this.complexForm.reset()
  }
}