import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { DisableButtonDirective } from './directives/disable-button.directive';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
	imports: [

	],
	declarations: [InfiniteScrollDirective, DisableButtonDirective, GenderPipe],
	exports: [InfiniteScrollDirective, DisableButtonDirective, GenderPipe, FormsModule]
})
export class SharedModule { }
