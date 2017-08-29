import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoContentComponent } from './components/no-content/no-content.component';

/**
 * Service
 */
import { UserService } from './services/user.service';
import { LoadingService } from './services/loading.service';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		CookieModule.forRoot(),
		SharedModule,
		CoreRoutingModule
	],
	declarations: [HomeComponent, LoginComponent, NavbarComponent, NoContentComponent, HomeDetailComponent],
	exports: [HomeComponent, LoginComponent, NavbarComponent, NoContentComponent],
	providers: [UserService, LoadingService]
})
export class CoreModule { }
