import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsAutocompleteExampleComponent } from './chips-autocomplete-example/chips-autocomplete-example.component';
import { DialogAnimationsExampleComponent } from './dialog-animations-example/dialog-animations-example.component';
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog/dialog-animations-example-dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    ChipsAutocompleteExampleComponent,
    DialogAnimationsExampleComponent,
    DialogAnimationsExampleDialog,
    SidenavAutosizeExampleComponent,
    TableBasicExampleComponent,
  ],
  entryComponents:[
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule,
  ],
  providers: [
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
