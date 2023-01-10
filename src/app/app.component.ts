import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [
    { id: 1, title: 'js', body: 'desc' },
    { id: 2, title: 'dfg 2', body: 'desc' },
    { id: 3, title: 'js 3', body: 'desc' },
  ];

  sortField = 'title';

  get() {
    return this.posts;
  }

  add(post: Post) {
    this.posts = this.posts.concat(post);
  }

  remove(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  sort() {
    const field = this.sortField as keyof Post;
    this.posts = [...this.posts].sort((a, b) =>
      a[field].toString().localeCompare(b[field].toString())
    );
    console.log(field);
  }
}

export interface Post {
  id: number;
  title: string;
  body: string;
}
