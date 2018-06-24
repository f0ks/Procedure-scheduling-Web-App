import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcedureService} from "../../procedure.service";

@Component({
  selector: 'app-create-procedure',
  templateUrl: './create-procedure.component.html',
  styleUrls: ['./create-procedure.component.less']
})
export class CreateProcedureComponent implements OnInit {

  proceduresForm: FormGroup;


  constructor(private procedureservice: ProcedureService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.proceduresForm = this.fb.group({
      patient: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['']
    });
  }

  addProcedure(patient, description, status, startTime, endTime) {
    this.procedureservice.addProcedure(patient, description, status, startTime, endTime);
  }


  ngOnInit() {
  }

}
