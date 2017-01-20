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
	selected = null

	constructor(private container: ContainerService) {
		container.getAll(function(){
			console.log('success')
		}, function(){
			console.log('error')
		})
	}

	onEdit(newName, newPrice, newType){
		console.log('SELECTED', newName, newPrice, newType)
		this.container.edit(this.selected.id, { name: newName, price: newPrice, type: newType })
	}

	onRemove(){
		if (this.selected)
		this.container.remove(this.selected.id)
	}


	onItem(item){
		if (this.selected == item)
			this.selected = null
		else
			this.selected = item
	}

	getClass(item){
		if (this.selected && item.id == this.selected.id)
			return 'success'
	}
}