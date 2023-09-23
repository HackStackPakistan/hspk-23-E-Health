import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentsComponent } from './appointments.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
    children: [
      {
        path: '',
        component: ListingComponent
      },
      {
        path: 'listing',
        component: ListingComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
