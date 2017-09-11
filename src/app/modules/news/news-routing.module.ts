import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

const routes: Routes = [
	{
		path: '',
		component: NewsComponent,
		// children: [
		// 	{ path: ':id', component: NewsDetailComponent }, // using with <router-outlet></router-outlet> in NewsComponent
		// 	{ path: 'detail', component: NewsDetailComponent } 
		// ]
	},
	{
		path: 'detail',
		component: NewsDetailComponent // no need to <router-outlet></router-outlet>
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NewsRoutingModule { }
