import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/**
 * Components
 */
import { NavbarComponent } from './components/navbar/navbar.component';
/**
 * Directives
 */
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { DisableButtonDirective } from './directives/disable-button.directive';
/**
 * Pipes
 */
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
	],
	declarations: [NavbarComponent, InfiniteScrollDirective, DisableButtonDirective, GenderPipe],
	exports: [NavbarComponent, InfiniteScrollDirective, DisableButtonDirective, GenderPipe, CommonModule, FormsModule]
})
export class SharedModule { }
