import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', component: LoginComponent },
    ])],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
