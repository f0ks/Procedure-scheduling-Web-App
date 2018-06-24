import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {b} from "@angular/core/src/render3";
import { Patients } from './components/patients/Patients';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  uri = 'http://46.101.253.55:8080';

  constructor(private http: HttpClient) {
  }

  addPatient(name, sex, birthday) {
    const obj = {
      name: name,
      sex: sex,
      birthday: birthday
    };
    this.http.post(`${this.uri}/patients`, obj)
      .subscribe(res => console.log('Done'));
  }

  getPatients() {
    return this
      .http
      .get(`${this.uri}/patients`);
  }

  addProcedure(patient, description, status, startTime, endTime) {
    const obj = {
      patient: patient,
      description: description,
      status: status,
      startTime: startTime,
      endTime: endTime
    };
    this.http.post(`${this.uri}/studies`, obj)
      .subscribe(res => console.log('Done'));
  }

  getProcedures() {
    return this
      .http
      .get(`${this.uri}/studies`);
  }

  updateProcedure (id, model) {
    this.http.put(`${this.uri}/studies/${id}`, model)
      .subscribe(res => console.log('Done'));
  }

}
