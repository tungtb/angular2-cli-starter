import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-home-detail',
	templateUrl: './home-detail.component.html',
	styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

	public detailId = null;

	constructor(
		private ActivatedRoute: ActivatedRoute,
	) { }

	ngOnInit() {
		this.processParam();
	}

	processParam() {
		this.ActivatedRoute.paramMap.map((params: ParamMap) => {
			return params.get('id');
		}).subscribe((id: string) => {
			this.detailId = id;
		})

	}

}
