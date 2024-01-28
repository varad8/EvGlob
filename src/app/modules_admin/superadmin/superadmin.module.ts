import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SdashboardComponent } from './scomponents/sdashboard/sdashboard.component';
import { SprofileComponent } from './scomponents/sprofile/sprofile.component';
import { SsettingsComponent } from './scomponents/ssettings/ssettings.component';
import { SevstationsComponent } from './scomponents/sevstations/sevstations.component';
import { SanalyticsComponent } from './scomponents/sanalytics/sanalytics.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SdashboardComponent,
    SprofileComponent,
    SsettingsComponent,
    SevstationsComponent,
    SanalyticsComponent,
  ],
  imports: [CommonModule, SuperadminRoutingModule, FormsModule],
})
export class SuperadminModule {}
