import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  isFavorite = false;
  onFavorite() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }
}
