import { Component, OnInit } from '@angular/core';
import {
	ContainerService
} from '../container.service';


@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {

  constructor(private container: ContainerService) { }

  ngOnInit() {
  }


	onClick(name, type, price){
		this.container.create({name: name, type: type, price: price})
	}
}
