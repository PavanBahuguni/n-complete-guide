import { Component} from '@angular/core';

@Component({
  selector: 'app-event-bindin',
  template: `
    <h2> Event binding..!<h2>
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindinComponent{
    onClicked(){
      alert("It worked!");
    }
}
