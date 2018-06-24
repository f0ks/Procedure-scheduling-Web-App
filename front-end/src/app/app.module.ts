import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreatePatientComponent} from './components/create-patient/create-patient.component';
import {IndexComponent} from './components/index/index.component';
import {CreateProcedureComponent} from './components/create-procedure/create-procedure.component';
import {UpdateProcedureComponent} from './components/update-procedure/update-procedure.component';
import {ProcedureService} from "./procedure.service";
import {FormsModule} from '@angular/forms';


import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import {PatientsComponent} from './components/patients/patients.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {
    path: 'create-patient',
    component: CreatePatientComponent
  },
  {
    path: 'create-procedure',
    component: CreateProcedureComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'edit-procedure/:id',
    component: UpdateProcedureComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    IndexComponent,
    CreateProcedureComponent,
    UpdateProcedureComponent,
    PatientsComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [ProcedureService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
