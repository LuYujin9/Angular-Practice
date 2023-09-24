import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  authors;
  constructor(authors: AuthorsService) {
    this.authors = authors.getAuthors();
  }
}
