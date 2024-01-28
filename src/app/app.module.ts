import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { SearchevformComponent } from './components/searchevform/searchevform.component';
import { EvcardComponent } from './components/evcard/evcard.component';
import { EvfeaturesComponent } from './components/evfeatures/evfeatures.component';
import { EvtestimonialComponent } from './components/evtestimonial/evtestimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { EvadminloginComponent } from './components/evadminlogin/evadminlogin.component';
import { EvadminregisterComponent } from './components/evadminregister/evadminregister.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.development';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    HerosectionComponent,
    SearchevformComponent,
    EvcardComponent,
    EvfeaturesComponent,
    EvtestimonialComponent,
    FooterComponent,
    EvadminloginComponent,
    EvadminregisterComponent,
    AdminloginComponent,
  ],
  imports: [
    NgxWebstorageModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
