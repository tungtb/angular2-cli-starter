import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { NoContentComponent } from './components/no-content/no-content.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'news', loadChildren: './modules/news/news.module#NewsModule', canActivate: [AuthGuard] },
	{ path: '**', component: NoContentComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
