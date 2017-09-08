import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsRoutingModule
  ],
  declarations: [NewsComponent, NewsDetailComponent]
})
export class NewsModule { }
