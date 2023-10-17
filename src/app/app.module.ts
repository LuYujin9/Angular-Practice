import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses/courses.component'; //import component
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputComponent } from './input/input.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { zippyComponent } from './zippy/zippy.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    InputComponent,
    TitleCasePipe,
    LikeComponent,
    zippyComponent,
    CreateCourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
  ], //add all the components, only with it we can add courses component in html
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CoursesService, AuthorsService], //Dependency injection
  bootstrap: [AppComponent],
})
// convert a plane Tasker class to a module from angular point of view
export class AppModule {}
