import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../components/base/base.component';
import { LoadingService } from '../../../../services/loading.service';
import { UserService } from '../../../../services/user.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent extends BaseComponent implements OnInit {

	public users = [];

	constructor(
		public Router: Router,
		public UserService: UserService,
		private LoadingService: LoadingService
	) {
		super(Router, UserService);
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

}
