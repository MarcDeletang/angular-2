import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ContainerService, IProduct, Product } from '../container.service';


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	product: Product
	private sub: any


	constructor(private route: ActivatedRoute, private container: ContainerService) {

	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.product = this.container.items.find(x => x && x.id == params['data'] )
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}
}