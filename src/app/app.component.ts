import { Component } from '@angular/core';

type LikeChangedEventArgs = {
  newValue: { body: string; isLiked: boolean; likesCount: number };
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-practice';
  text = '';
  tweet = {
    body: 'Here is the body of zippy...',
    isLiked: false,
    likesCount: 10,
  };

  onLikeChanged(eventArgs: LikeChangedEventArgs) {
    console.log(eventArgs);
    console.log(this.tweet);
  }
}
