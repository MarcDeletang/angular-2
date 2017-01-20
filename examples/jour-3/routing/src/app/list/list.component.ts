import { Component, OnInit } from '@angular/core';
import { ContainerService, IProduct, Product } from '../container.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	selected: IProduct[] = []

  constructor(private router: Router, private container: ContainerService) { }

  ngOnInit() {
  }


	elemClicked(product: Product) {
		this.router.navigate(['admin', product.id])
		}

	getProductClass(product: Product) {
		let idx = this.selected.findIndex(x=> x.id == product.id )
		if (idx != -1)
			return 'success'
	}
}
