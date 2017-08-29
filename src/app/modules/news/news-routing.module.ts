import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
	{
		path: '',
		component: NewsComponent,
		// children: [
		// 	{ path: ':id', component: NewsDetailComponent }
		// ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NewsRoutingModule { }
