import { Directive, Input, HostListener, EventEmitter } from '@angular/core';
declare var $: any;
/**
 * Use: <button disableButton>Click</button>                     //Default 1000ms
 *      <button disableButton disableTime='3000'>Click</button>  //Setting 3000ms
 */
@Directive({
	selector: '[disableButton]'
})
export class DisableButtonDirective {

	constructor() { }

	@Input() disableTime: number;

	@HostListener('click', ['$event'])
	onClick(event) {
		let time = !!this.disableTime ? this.disableTime : 1000;
		let elTarget = $(event.target);
		elTarget.addClass('disable-click');
		elTarget.attr('disabled', 'disabled');
		setTimeout(() => {
			elTarget.removeClass('disable-click');
			elTarget.removeAttr('disabled', 'disabled');
		}, time);
	}

}
