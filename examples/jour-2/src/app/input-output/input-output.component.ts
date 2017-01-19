import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-input-output',
	templateUrl: './input-output.component.html',
	styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent{
	parentValue = 'Message from parent'
	messages: string[] = []

	constructor() { }

	onChildSubmit(result: string){
		console.log('onChildSubmit', result)
		this.messages.push(result)
	}

}
