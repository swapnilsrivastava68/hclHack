import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: MainNavComponent, canActivate: [AuthGuardGuard]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
