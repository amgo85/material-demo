import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'},
  ];

  minDate = new Date(2000, 1, 1);
  maxDate = new Date(2022, 8, 30);

  color = 3;

  isChecked = true;

  onChange($event: any){
    console.log($event);
  }
}
