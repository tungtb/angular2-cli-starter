import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-base',
	template: '',
	styleUrls: []
})
export class BaseComponent implements OnInit {

	public userLoginData;

	constructor(
		public Router: Router,
		public UserService: UserService
	) {
		this.checkLogin();
	}

	ngOnInit() {
	}

	private checkLogin() {
		this.userLoginData = this.UserService.getCookieUserInfo();
		if (!this.userLoginData) {
			this.Router.navigate(['login']);
		}
	}

}
