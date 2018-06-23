import {Component, OnInit} from '@angular/core';
import {Patients} from "./Patients";
import {ProcedureService} from "../../procedure.service";


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.less']
})
export class PatientsComponent implements OnInit {

  patients: Patients[];

  constructor(private procedureservice: ProcedureService) {
  }

  ngOnInit() {
    this.procedureservice
      .getPatients()
      .subscribe((data: Patients[]) => {
        this.patients = data;
      });
  }

}
