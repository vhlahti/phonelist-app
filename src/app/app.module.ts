import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhoneDetailComponent } from './phonelist/phone-detail/phone-detail.component';
import { PhoneService } from './phone.service';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
