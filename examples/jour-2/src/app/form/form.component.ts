import { Component } from '@angular/core';
import { Validators } from '@angular/forms'

export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent {
powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer']

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet')

  submitted = false

  onSubmit() {
  	console.log('MODEL', this.model)
   }

  newHero() {
    this.model = new Hero(42, '', '')
  }

  showFormControls(form: any) {
  	return this.model.name
    //return form && form.controls['name'] && form.controls['name'].value;
  }
}
