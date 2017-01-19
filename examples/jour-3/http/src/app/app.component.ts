import {
	Component,
	OnInit
} from '@angular/core';

import {
	ContainerService
} from './container.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'HTTP APP';

	constructor(private container: ContainerService) {
		container.getAll(function(){
			console.log('success')
		}, function(){
			console.log('error')
		})
	}

	onClick(){
		this.container.create({ test: 'hello' })
	}
}