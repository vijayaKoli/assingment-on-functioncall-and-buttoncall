import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assfunction';
  data="hello code"
  num=100;

  getName(name:string)
  {
    alert("name")
  }
  

}
