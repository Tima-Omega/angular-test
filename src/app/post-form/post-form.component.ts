import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  @Output() onCreate = new EventEmitter<Post>();
  title = '';
  body = '';
  create() {
    this.onCreate.emit({ id: Date.now(), title: this.title, body: this.body });
    this.title = '';
    this.body = '';
  }
}
