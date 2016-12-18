import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1><hr>
    <app-other></app-other><hr>
    <app-another>
      <div>
        <h1>Hello</h1>
        <p> Angular2!</p>
      </div>
    </app-another><hr>
    <app-databinding></app-databinding><hr>
    `,
  styles: [`
  h1{
    color:red;
  }`]
})
export class AppComponent {
  title = 'Root Component..!';
}
