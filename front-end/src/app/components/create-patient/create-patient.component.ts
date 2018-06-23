import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProcedureService} from "../../procedure.service";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.less']
})
export class CreatePatientComponent implements OnInit {

  patientForm: FormGroup;

  constructor(private procedureservice: ProcedureService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.patientForm = this.fb.group({
      patient_name: ['', Validators.required],
      patient_sex: ['', Validators.required],
      patient_birthday: ['', Validators.required]
    });
  }

  addPatient(name, sex, birthday) {
    this.procedureservice.addPatient(name, sex, birthday);
  }

  ngOnInit() {
  }

}


