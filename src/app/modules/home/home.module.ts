import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeDetailComponent]
})
export class HomeModule { }
