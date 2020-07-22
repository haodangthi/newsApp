import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  news:[] = []
  filteredNews:[]=[]
  shownNews=[]
  pageSize:number=10
  searchValue:string=''
  currentPageIndex:number=0
  constructor(private newsService: NewsServiceService) {

  }
  ngOnInit(): void {
    
    this.newsService.news$.subscribe(
      res => this.news = res)
    this.newsService.paginationParameters$.subscribe(page=>{
      this.currentPageIndex=page.currPage
      this.pageSize=page.pageSize
    })
    

    this.newsService.filteredNews$.subscribe(res=>{
      this.filteredNews=res
      this.showNews(this.currentPageIndex,this.pageSize)
    })

    this.newsService.searchValue$.subscribe(val=>{
      this.searchValue=val
      
    })
    
  }

  onPageChange(event){
    this.newsService.paginationParameters$.next({
      currPage:event.pageIndex,
      pageSize:event.pageSize
    })
    this.showNews(this.currentPageIndex,this.pageSize)

  }

  showNews(currentPage,pageSize){
    const firstIndex=currentPage*pageSize
    const lastIndex =firstIndex+pageSize
    this.shownNews=this.filteredNews.slice(firstIndex,lastIndex)
  }

  
  inputHandler(value){
    this.newsService.searchValue$.next(value)
    this.newsService.filteredNews$.next(this.news.filter((el:{title:string})=>el.title.toLowerCase().indexOf(value.toLowerCase())!==-1))
  }

}
