import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HistoryComponent } from './history/history.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';


@NgModule({
  declarations: [
    PatientComponent,
    ListingComponent,
    DetailComponent,
    AddEditComponent,
    HistoryComponent,
    HistoryDetailComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
