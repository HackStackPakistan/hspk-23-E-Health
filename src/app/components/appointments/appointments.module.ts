import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppointmentsComponent,
    ListingComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
