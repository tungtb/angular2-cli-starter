import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(
		private Router: Router,
		private UserService: UserService
	) { }

	ngOnInit() {
		console.log("NavbarComponent Init");
	}

	isLoggedIn() {
		return this.UserService.getCookieUserInfo() ? true : false;
	}

	doLogout() {
		this.UserService.logout();
	}

}
