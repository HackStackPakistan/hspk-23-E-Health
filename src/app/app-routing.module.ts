import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./components/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./components/patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./components/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
