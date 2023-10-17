import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class zippyComponent {
  isExpanded = false;
  @Input('title') title!: string;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
