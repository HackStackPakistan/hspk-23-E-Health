import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { ListingComponent } from './listing/listing.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DoctorComponent,
    ListingComponent,
    AddEditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DoctorModule { }
