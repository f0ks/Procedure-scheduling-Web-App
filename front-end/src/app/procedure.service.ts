import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {b} from "@angular/core/src/render3";
import { Patients } from './components/index/Patients';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  uri = 'http://localhost:8080';

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

}
