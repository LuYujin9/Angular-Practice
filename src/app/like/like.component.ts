import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input() likesCount!: number;
  @Input('isActive') isActive!: boolean;
  //建议这里用is
  @Output() change = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    //和react里的useState不一样, value的值会立即改变,并运用到下一行指令
    this.likesCount += this.isActive ? 1 : -1;
    this.change.emit({ new: this.isActive });
  }
}
