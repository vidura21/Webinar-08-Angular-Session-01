import { Component, OnInit, Input, Output } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;
  @Output() deleteEvent = new EventEmitter();

  constructor(private blogsService: BlogService) { }

  ngOnInit(): void { }

  ratePost(rate: number) {
    if (rate == this.blog.rate) {
      this.blog.rate--;
    } else {
      this.blog.rate = rate;
    }
  }
}
