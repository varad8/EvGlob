import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    SidebarComponent,
    SettingsComponent,
    ProfileComponent,
    AnalyticsComponent,
    BookingComponent,
    PaymentsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
