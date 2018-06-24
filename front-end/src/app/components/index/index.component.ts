import {Component, OnInit} from '@angular/core';
import {Procedures} from "./Procedures";
import {ProcedureService} from "../../procedure.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  statuses: any[] = ['planned', 'in progress', 'finished'];
  procedures: Procedures[];

  constructor(private procedureservice: ProcedureService) {
  }

  ngOnInit() {
    this.procedureservice
      .getProcedures()
      .subscribe((data: Procedures[]) => {
        this.procedures = data;
      });
  }
}
