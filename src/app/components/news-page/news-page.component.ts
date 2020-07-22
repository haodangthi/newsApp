import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  newsId:string
  pageNews
  constructor(private route: ActivatedRoute,
    private newsService:NewsServiceService) { }

  ngOnInit(): void {
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.newsService.news$.subscribe(news=>{
      this.pageNews= news.filter(el=>news.indexOf(el)===+this.newsId)[0]
    })
    

    
  }

}
