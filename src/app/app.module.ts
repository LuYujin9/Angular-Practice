import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses/courses.component'; //import component
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputComponent } from './input/input.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    InputComponent,
    TitleCasePipe,
  ], //add all the components, only with it we can add courses component in html
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService, AuthorsService], //Dependency injection
  bootstrap: [AppComponent],
})
// convert a plane Tasker class to a module from angular point of view
export class AppModule {}
