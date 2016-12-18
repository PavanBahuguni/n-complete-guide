import { Component} from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
        <p>Sibling of another componenet</p>
        <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article{
      border:1px solid black;
    }
  `]
})
export class AnotherComponent{
}
