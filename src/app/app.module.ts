import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses/courses.component'; //import component
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [AppComponent, CoursesComponent, AuthorsComponent], //add all the components, only with it we can add courses component in html
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService, AuthorsService], //Dependency injection
  bootstrap: [AppComponent],
})
// convert a plane Tasker class to a module from angular point of view
export class AppModule {}
