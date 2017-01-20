import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ContainerService, Product } from '../container.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private container: ContainerService) { }

  ngOnInit() {
  }

  onClick(data: string){
  	//this.router.navigateByUrl('/admin/' + data)
  	this.router.navigate(['/admin/', data])
  }

  onCreate(data: string){
    this.container.items.push(new Product(data, 42, 'INPUT'))
    this.router.navigateByUrl('')
  }

}
