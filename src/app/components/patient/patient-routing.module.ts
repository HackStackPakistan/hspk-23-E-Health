import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientComponent } from './patient.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HistoryComponent } from './history/history.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
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
      },
      {
        path: 'add-edit',
        component: AddEditComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'history-detail',
        component: HistoryDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
