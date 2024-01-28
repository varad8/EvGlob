import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { EvadminregisterComponent } from './components/evadminregister/evadminregister.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { EvadminloginComponent } from './components/evadminlogin/evadminlogin.component';
import { AuthGuard } from './guards/auth.guard';
import { SauthGuard } from './guards/sauth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // User
  { path: 'login/user', component: LoginComponent },
  { path: 'register/user', component: RegisterComponent },
  // Ev Admin
  { path: 'register/evadmin', component: EvadminregisterComponent },
  { path: 'login/evadmin', component: EvadminloginComponent },
  //Admin
  { path: 'login/admin', component: AdminloginComponent },

  // EV Admin Dashboard
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },

  // Super Admin Dashboard
  {
    path: 'sadmin',
    canActivate: [SauthGuard],
    loadChildren: () =>
      import('./modules_admin/superadmin/superadmin.module').then(
        (s) => s.SuperadminModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
