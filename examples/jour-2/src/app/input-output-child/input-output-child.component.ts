import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.css']
})
export class InputOutputChildComponent{
  @Input() fromParent: string
  //Event emitter from angular, templated on string (can only emit string)
  @Output() onSubmit = new EventEmitter()
  i = 0

  onClick(data: string){
    this.onSubmit.emit(this.fromParent + ' modified ' + this.i)
    ++this.i
  }

}
