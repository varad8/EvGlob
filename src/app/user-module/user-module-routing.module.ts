import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './usercomponents/userdashboard/userdashboard.component';
import { UseranalyticsComponent } from './usercomponents/useranalytics/useranalytics.component';
import { UserprofileComponent } from './usercomponents/userprofile/userprofile.component';
import { UsersettingComponent } from './usercomponents/usersetting/usersetting.component';
import { UserbookingComponent } from './usercomponents/userbooking/userbooking.component';
import { UserfeedbackComponent } from './usercomponents/userfeedback/userfeedback.component';

const routes: Routes = [
  {
    path: '',
    component: UserdashboardComponent,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
      { path: 'analytics', component: UseranalyticsComponent },
      { path: 'profile', component: UserprofileComponent },
      { path: 'settings', component: UsersettingComponent },
      { path: 'booking', component: UserbookingComponent },
      { path: 'ratings', component: UserfeedbackComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModuleRoutingModule {}
