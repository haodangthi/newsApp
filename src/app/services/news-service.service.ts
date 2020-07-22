import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Response} from '../models/news'


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  paginationParameters$= new BehaviorSubject({
    currPage:0,
    pageSize:10
  })
  searchValue$=new BehaviorSubject('')
  news$:any= new BehaviorSubject([]);
  filteredNews$:any= new BehaviorSubject([]);
  
  // url='https://newsapi.org/v2/top-headlines?' +
  // 'country=us&' +
  // 'apiKey=b0dd17deb9b34f2abac8026a821a2b3b'
  url2='http://localhost:8080/news'

  constructor(private http: HttpClient){
    this.getNews().subscribe((res:Response)=>{
      console.log(res);
      
      this.news$.next(res.articles)
      this.filteredNews$.next(res.articles)
    })
  }
  
  getNews(){
    return this.http.get(this.url2)
  }
}
