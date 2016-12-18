import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  strinInterpolation = 'This is string interpolation.';
  numberInterpolation = 2;
  onTest(){
    return true;
  }
}
