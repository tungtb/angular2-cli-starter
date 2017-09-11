import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Config } from "../config/config";
declare var $: any;

@Injectable()
export class CoreService {

	private baseUrl: string;

	constructor(public _http: Http) {
		this.baseUrl = Config.apiUrl;
	}

	public post(uri: string, bodyParam: object, timeout?:number, url?: string, options?: RequestOptionsArgs) {
		let postUrl = this.baseUrl + uri;
		if (!!url) postUrl = url;
		return this._request(RequestMethod.Post, postUrl, $.param(bodyParam), timeout, options);
	}

	private _request(method: RequestMethod, url: string, body?: string, timeoutParam?:number, options?: RequestOptionsArgs): Observable<Response> {
		let requestOptions = new RequestOptions(Object.assign({
			method: method,
			url: url,
			body: body
		}, options));

		if (!requestOptions.headers) {
			requestOptions.headers = new Headers();
			requestOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
		}

		return Observable.create((observer) => {
			this._http.request(new Request(requestOptions))
				.timeoutWith(timeoutParam || 30000, Observable.throw(new Error('Http Timeout Error')))
				.map(res => {
					return this.processResponseData(res);
				})
				.finally(() => {

				})
				.subscribe(
				(res) => {
					observer.next(res);
					observer.complete();
				},
				(err) => {
					switch (err.status) {
						case 401:
							//intercept 401
							observer.error(err);
							break;
						default:
							observer.error(err);
							break;
					}
				})
		})
	}

	private processResponseData(response) {
		response._body = response._body.replace("response(", "");
		response._body = response._body.replace("})", "}");
		return response.json();
	}

}
