import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserdashboardComponent } from './usercomponents/userdashboard/userdashboard.component';
import { UserbookingComponent } from './usercomponents/userbooking/userbooking.component';
import { UserfeedbackComponent } from './usercomponents/userfeedback/userfeedback.component';
import { UserprofileComponent } from './usercomponents/userprofile/userprofile.component';
import { UsersettingComponent } from './usercomponents/usersetting/usersetting.component';
import { UseranalyticsComponent } from './usercomponents/useranalytics/useranalytics.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserdashboardComponent,
    UserbookingComponent,
    UserfeedbackComponent,
    UserprofileComponent,
    UsersettingComponent,
    UseranalyticsComponent,
  ],
  imports: [CommonModule, UserModuleRoutingModule, FormsModule],
})
export class UserModuleModule {}
