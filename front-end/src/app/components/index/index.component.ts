import {Component, OnInit} from '@angular/core';
import {Patients} from "./Patients";
import {ProcedureService} from "../../procedure.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

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
