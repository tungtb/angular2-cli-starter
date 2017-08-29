import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { CoreService } from "./core.service";
import { Http } from "@angular/http";
import { Router } from '@angular/router';

@Injectable()
export class UserService extends CoreService {

    private userList = [];

    constructor(
        public Http: Http,
        private CookieService: CookieService,
        private Router: Router
    ) {
        super(Http);
        this.initData();
    }

    private initData() {
        for (let i = 1; i <= 20; i++) {
            this.userList.push({ id: i, name: 'user ' + i });
        }
    }

    public get(name) {
        if (!!this[name]) {
            return this[name];
        }
        return null;
    }

    public add() {
        let index = this.userList.length + 1;
        for (let i = index; i <= index + 10; i++) {
            this.userList.push({ id: i, name: 'user ' + i });
        }
    }

    public login(params) {
        params.device_id = this.genUUID();
        params.user_agent = navigator.userAgent;
        return this.post('user/login', params);
    }

    public logout(linkTo = '/login') {
        this.CookieService.remove('userSession');
        this.Router.navigate([linkTo]);
    }

    public setCookieUserInfo(userData) {
        this.CookieService.putObject('userSession', userData);
    }

    public getCookieUserInfo() {
        return this.CookieService.getObject('userSession');
    }

    public isLoggedIn() {
        return this.CookieService.getObject('userSession') ? true : false;
    }

    private S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    private genUUID() {
        return (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0, 3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
    }
}
