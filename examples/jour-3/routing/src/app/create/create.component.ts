import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(data: string){
  	//this.router.navigateByUrl('/admin/' + data)
  	this.router.navigate(['/admin/', data])
  }

}
