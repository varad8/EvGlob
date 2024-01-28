import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SdashboardComponent } from './scomponents/sdashboard/sdashboard.component';
import { SevstationsComponent } from './scomponents/sevstations/sevstations.component';
import { SprofileComponent } from './scomponents/sprofile/sprofile.component';
import { SsettingsComponent } from './scomponents/ssettings/ssettings.component';
import { SanalyticsComponent } from './scomponents/sanalytics/sanalytics.component';

const routes: Routes = [
  {
    path: '',
    component: SdashboardComponent,
    children: [
      { path: 'analytics', component: SanalyticsComponent },
      { path: 'profile', component: SprofileComponent },
      { path: 'settings', component: SsettingsComponent },
      { path: 'evstations', component: SevstationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminRoutingModule {}
