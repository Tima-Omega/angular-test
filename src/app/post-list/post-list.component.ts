import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Output() onRemove = new EventEmitter<Post>();
  @Input() posts!: Post[];
  remove(post: Post) {
    this.onRemove.emit(post)
  }
}
