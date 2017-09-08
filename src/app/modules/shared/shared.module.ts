import { NgModule } from '@angular/core';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { DisableButtonDirective } from './directives/disable-button.directive';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
	imports: [

	],
	declarations: [InfiniteScrollDirective, DisableButtonDirective, GenderPipe],
	exports: [InfiniteScrollDirective, DisableButtonDirective, GenderPipe]
})
export class SharedModule { }
