import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-other></app-other>
    <app-another></app-another>
  `,
  styles: [`
  h1{
    color:red;
  }`]
})
export class AppComponent {
  title = 'Does it work!?';
}
