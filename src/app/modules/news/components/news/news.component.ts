import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';
import { UserService } from '../../../core/services/user.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	public users = [];

	constructor(
		private LoadingService: LoadingService,
		private UserService: UserService
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

}
