import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, timer } from 'rxjs';
import { EditCourseComponent } from './edit-course/edit-course.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  progress = 0;
  timer: any;

  isLoading = false;
  constructor(private dialog: MatDialog){
    setInterval(()=> {
      this.progress++;
      if(this.progress == 100) clearInterval(this.timer);
    }, 20); 

    this.isLoading = true;
    this.getCourses()
    .subscribe(x => this.isLoading = false);
  }

  colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'},
  ];

  color = 3;

  categories: any[] = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'},
  ];

  minDate = new Date(2000, 1, 1); // datepicker
  maxDate = new Date(2022, 8, 30);  // datepicker

  isChecked = true;

  onChange($event: any){
    console.log($event);
  }

  selectCategory(category: any){
    this.categories
      .filter( c => ! category)
      .forEach( c => c['selected'] = false);

      category.selected = !category.selected;
  }

  getCourses(){
    return timer(2000);
  }

  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
