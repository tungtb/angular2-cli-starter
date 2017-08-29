import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { LoginComponent } from './components/login/login.component';
import { NoContentComponent } from './components/no-content/no-content.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', component: LoginComponent },
        {
            path: 'home', component: HomeComponent,
            children: [
                { path: ':id', component: HomeDetailComponent }
            ]
        },
    ])],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
