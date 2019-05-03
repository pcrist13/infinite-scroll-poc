import { Component } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inifite-scroller-poc';
  currentPage: number = 1;
  news: Array<any> = [];
  scrollCallback;

  constructor(private hackerNewsService: HackerNewsService) {
    this.scrollCallback = this.getStories.bind(this);
  }

  getStories() {
    return this.hackerNewsService.getLatestStories(this.currentPage).pipe(tap(this.processData));
  }

  private processData = (news) => {
    this.currentPage++;
    this.news = this.news.concat(news);
  }
}
