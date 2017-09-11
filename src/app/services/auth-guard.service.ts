import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild,
	NavigationExtras,
	CanLoad, Route
} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
	constructor(private UserService: UserService, private Router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.canActivate(route, state);
	}

	canLoad(route: Route): boolean {
		let url = `/${route.path}`;

		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.UserService.isLoggedIn()) { return true; }
		this.Router.navigate(['/login']);
		return false;
	}
}
