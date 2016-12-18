import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <hr><h2>Custom property Binding..!</h2>
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent{
    @Input() result:number = 0;
}
