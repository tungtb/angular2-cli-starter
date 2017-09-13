import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';


import { AuthGuard } from '../../services/auth-guard.service';
import { PreloadingStrategyService } from '../../services/preloading-strategy.service';

import { CoreRoutingModule } from './core-routing.module';

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
	declarations: [],
	exports: [],
	providers: [AuthGuard, PreloadingStrategyService, UserService, LoadingService]
})
export class CoreModule { }
