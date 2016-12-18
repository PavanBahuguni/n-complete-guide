import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-bindin',
  template: `
    <h2> Event binding..!<h2>
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindinComponent{
    @Output() clicked = new EventEmitter<string>();

    onClicked(){
      this.clicked.emit('Custom event works..!');
    }
}
