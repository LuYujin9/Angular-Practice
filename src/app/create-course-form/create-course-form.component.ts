import { Component } from '@angular/core';

@Component({
  selector: 'create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.css'],
})
export class CreateCourseFormComponent {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
  submit(course: object) {
    console.log(course);
  }
  log(courseName: object) {
    console.log(courseName);
  }
}
