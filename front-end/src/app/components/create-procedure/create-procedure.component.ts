import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcedureService} from "../../procedure.service";
import {Patients} from "../patients/Patients";
import {Procedures} from "../index/Procedures";

@Component({
  selector: 'app-create-procedure',
  templateUrl: './create-procedure.component.html',
  styleUrls: ['./create-procedure.component.less']
})

export class CreateProcedureComponent implements OnInit {

  proceduresForm: FormGroup;
  patients: Patients[];
  patient: String;
  rooms: any[];
  doctors: any[];
  status: any[] = ['planned', 'in progress', 'finished'];

  constructor(private procedureservice: ProcedureService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.proceduresForm = this.fb.group({
      patient: ['', Validators.required],
      description: ['', Validators.required],
      doctor: ['', Validators.required],
      room: ['', Validators.required],
      status: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['']
    });
  }

  addProcedure(patient, description, doctor, room, status, startTime, endTime) {
    this.procedureservice.addProcedure(patient, description,  doctor, room, status, startTime, endTime);
  }

  ngOnInit() {

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
