import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoadingService } from '../../services/loading.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public user: any = {
		userName: '',
		password: ''
	};
	public loginError;

	constructor(
		private Router: Router,
		private Location: Location,
		private LoadingService: LoadingService,
		private UserService: UserService
	) {
		if (this.UserService.isLoggedIn()) {
			this.Location.back();
		}
	}

	ngOnInit() {
		console.log("Init Login");
	}

	formValid() {
		this.loginError = '';
		if (!this.user.userName) {
			this.loginError += "<p>User name is required ! </p>";
		}
		if (!this.user.password) {
			this.loginError += "<p>Password is required !</p>";
		}
		return this.loginError.length > 0 ? false : true;
	}

	doSignIn() {
		if (this.formValid()) {
			this.LoadingService.showLoading("body");
			this.UserService.login({
				'login_id': this.user.userName,
				'password': this.user.password,
				'login_type': 3
			})
				.subscribe((res) => {
					console.log('UserService', res['result']);
					this.LoadingService.hideLoading("body");
					if (res['result']['status'] == 'NG') {
						this.loginError = res['result']['error']['message']
					} else {
						this.UserService.setCookieUserInfo(res['result']);
						this.Router.navigate(['']);
					}
				}, (err) => {
					this.LoadingService.hideLoading("body");
					console.log('UserService err', err);
				});
		}
	}

}
