import {Component, OnInit} from '@angular/core';
import {Procedures} from "./Procedures";
import {ProcedureService} from "../../procedure.service";
import {Patients} from "../patients/Patients";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  statuses: any[] = ['planned', 'in progress', 'finished'];
  procedures: Procedures[];
  patients: Patients[];
  rooms: any[];
  doctors: any[];

  constructor(private procedureservice: ProcedureService) {
  }

  updateStatus(id, model) {
    this.procedureservice.updateProcedure(id, model);
  }

  getNameById(id, idField, where) {
    let result = null;
    if (this[where]) {
      this[where].forEach((item) => {
        if (item[idField] === id) {
          result = item.name;
        }
      });
    }
    return result;
  }

  ngOnInit() {
    this.procedureservice
      .getProcedures()
      .subscribe((data: Procedures[]) => {
        this.procedures = data;
      });

    // load patients list
    this.procedureservice
      .getPatients()
      .subscribe((data: Patients[]) => {
        this.patients = data;
      });

    // load rooms
    this.procedureservice
      .getRooms()
      .subscribe((data: Procedures[]) => {
        this.rooms = data;
      });

    // load doctors
    this.procedureservice
      .getDoctors()
      .subscribe((data: Patients[]) => {
        this.doctors = data;
      });

  }
}
