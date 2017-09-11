import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './components/login/login.component';

/**
 * Service
 */
import { UserService } from '../../services/user.service';
import { LoadingService } from '../../services/loading.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		CookieModule.forRoot(),
		CoreRoutingModule
	],
	declarations: [LoginComponent],
	exports: [LoginComponent],
	providers: [UserService, LoadingService]
})
export class CoreModule { }
