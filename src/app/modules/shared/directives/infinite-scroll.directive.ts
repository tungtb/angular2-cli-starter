import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
/**
 * Use: <div infiniteScroll (scrolly)="callbackFunction();"></div>
 */
@Directive({
	selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective {

	public noneScroll = true;

	constructor() { }

	@Output() scrolly = new EventEmitter();

	@HostListener('scroll', ['$event'])
	onScroll(event) {
		let elTarget = event.target;
		if (this.noneScroll && elTarget.scrollTop > 0 && elTarget.scrollTop + elTarget.offsetHeight >= elTarget.scrollHeight) {
			this.noneScroll = false;
			this.scrolly.emit();
			setTimeout(() => {
				this.noneScroll = true;
			}, 1000);
		}
	}

}
