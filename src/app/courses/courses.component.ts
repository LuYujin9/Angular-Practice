import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { literalMap } from '@angular/compiler';

@Component({
  //decorator function with properties
  selector: 'courses', //<courses>"coursed" reference a css; <div class="courses"> ".courses" reference a class; id , #courses
  //<courses> extend HTML vacabulary, can define a new element, inside that we can have a list of elements or custom HTML elements
  template:
    // ngFor is a directive, wenn that modifies the structure of a Dom,use *to prefix
    `<h2>{{ number + title }}</h2>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul> `, // HTML markup, we want to be rendered. 可以用templateUrl引用另一个file,也可以用template直接写HTML
})
export class CoursesComponent {
  number;
  title = 'Authors';
  courses;

  constructor(service: CoursesService) {
    // 不使用 let service = new CoursesService(),因为使用当未来使用该service,想要增加parameter的时候,在这里也要做相应修改,来改变service的结构.
    //当使用dependency的时候,Angular会自动的根据servie的修改来生成新的courses
    this.courses = service.getCourses();
    this.number = service.getNumber();
  }
}
