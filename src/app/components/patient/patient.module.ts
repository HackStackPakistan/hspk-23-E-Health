import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    PatientComponent,
    ListingComponent,
    DetailComponent,
    AddEditComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
