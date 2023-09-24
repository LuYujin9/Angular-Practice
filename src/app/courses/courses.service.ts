export class CoursesService {
  _courses = ['course1', 'course2', 'course3'];

  getCourses() {
    return this._courses;
  }
  getNumber() {
    return this._courses.length;
  }
}
