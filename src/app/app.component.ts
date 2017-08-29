import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './modules/core/services/user.service';

@Component({
	selector: 'app-root',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	private userLoginData = null;

	constructor(
		private Router: Router,
		private UserService: UserService
	) {
		this.checkLogin();
	}
	private checkLogin() {
		this.userLoginData = this.UserService.getCookieUserInfo();
		console.log("AppComponent checkLogin", this.userLoginData);
		if (!this.userLoginData) {
			this.Router.navigate(['/login']);
		}
	}
}
