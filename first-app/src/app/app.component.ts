import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-other></app-other>
    <app-another>
      <div>
        <h1>Hello</h1>
        <p> World!</p>
      </div>
    </app-another>
    <app-another>
      <div>
        <h1>Hello</h1>
        <p>Anular2!</p>
      </div>  
    </app-another>
  `,
  styles: [`
  h1{
    color:red;
  }`]
})
export class AppComponent {
  title = 'Does it work!?';
}
