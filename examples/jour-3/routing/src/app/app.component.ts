import { Component } from '@angular/core';
import { ContainerService } from './container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "I'm the root, i don't do much"

  constructor(private container: ContainerService){

  }
}
