import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class LoadingService {

	constructor() { }

	public showLoading(element, withProgressBar = false) {
		var elementObj = $(element);
		elementObj.addClass('position-relative');
		var html = '<div id="loadingService">' + this.styleLoading();
		html += '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';
		if (withProgressBar) {
			html += "<div class='progressBar'><div class='loadingProgressBar'></div></div>";
		}
		html += "</div>";
		elementObj.append(html);
	}

	public styleLoading() {
		var style = "<style>";
		var loadingService = [
			"z-index: 9999",
			"position: absolute",
			"top:0",
			"left:0",
			"right:0",
			"bottom:0",
			"background-color: rgba(0, 0, 0, 0.2)"
		];
		var progressBar = [
			"background-color: rgba(0,0,0,0.1)",
			"top: 50%",
			"left: 49.2%",
			"transform: translate(-50%, -50%)",
			"position: absolute",
			"width: 200px",
			"height: 20px",
			"border-radius: 3px;"
		];
		var loadingProgressBar = [
			"background-color: #6876c1",
			"height: 100%",
			"width: 0%",
			"border-radius: 3px",
			"transition: width 0.5s",
			"text-align: right",
			"color: #FFF"
		];
		var spinner = [
			"transform: translate(-50%, -50%)",
			"font-size:30px",
			"position: absolute",
			"top:45%",
			"left:48%"
		];
		style += "#loadingService {" + loadingService.join(";") + "}";
		style += "#loadingService .progressBar{" + progressBar.join(";") + "}";
		style += "#loadingService .fa-spinner{" + spinner.join(";") + "}";
		style += "#loadingService .loadingProgressBar{" + loadingProgressBar.join(";") + "}";
		style += "</style>";
		return style;
	}

	public hideLoading(element) {
		var elementObj = $(element);
		elementObj.removeClass('position-relative');
		var divLoading = elementObj.find('#loadingService');
		divLoading.remove();
	}

	public setProgressBar(progressBar) {
		var loadingProgressBar = $(".loadingProgressBar");
		if (loadingProgressBar.length > 0) {
			loadingProgressBar.text(progressBar + "%");
			loadingProgressBar.css("width", progressBar + '%');
		}
	}

}
