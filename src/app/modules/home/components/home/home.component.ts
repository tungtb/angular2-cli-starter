import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../services/loading.service';
import { UserService } from '../../../../services/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public userLoginData;
	public users = [];

	constructor(
		public Router: Router,
		public UserService: UserService,
		private LoadingService: LoadingService
	) {
		this.users = this.UserService.get('userList');
	}

	ngOnInit() {
	}

	updateList() {
		this.LoadingService.showLoading("body");
		setTimeout(() => {
			this.UserService.add();
			this.LoadingService.hideLoading("body");
		}, 3000);
		console.log("Emit scroll");
	}

	addAdoptionItem() {
		
	}

	getAdoptionList() {
		
	}

	showAdoptionDetail(detailId) {
		
	}
}
