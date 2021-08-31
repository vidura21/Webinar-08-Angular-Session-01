import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs = null;

  constructor(private blogsService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogsService.blogs;
  }

  deletePost(id: number) {
    this.blogs = this.blogs.filter(o => o.id !== id);
  }

  ratePost(rate: number, id: number) {
    debugger
    let blog = this.blogs.filter(o => o.id !== id);
    blog.rate = rate;
  }
}
