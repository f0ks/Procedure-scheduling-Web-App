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
  constructor(private procedureservice: ProcedureService) {
  }

  updateStatus(id, model) {
    this.procedureservice.updateProcedure(id, model);
  }

  getPatientNameById(id): String {
    let result = null;
    if (this.patients) {
      this.patients.forEach((p) => {
        if (p._id === id) {
          result = p.name;
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
  }
}
