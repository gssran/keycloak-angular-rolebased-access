import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ErrorComponent } from './error/error/error.component';
import { RolesComponent } from './roles/roles/roles.component';

const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
    canActivate: [AuthGuardGuard],
    data: { roles: ['rolesAccess'] }
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
