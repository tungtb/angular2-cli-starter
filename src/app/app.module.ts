import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NoContentComponent } from './components/no-content/no-content.component';


/* Feature Modules */
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NoContentComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		HomeModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
