import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component'

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'newsPage/:id',
    component: NewsPageComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
