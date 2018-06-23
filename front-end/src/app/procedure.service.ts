import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {b} from "@angular/core/src/render3";

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  uri = 'http://localhost:8080/patients';

  constructor(private http: HttpClient) {
  }

  addPatient(name, sex, birthday) {
    const obj = {
      name: name,
      sex: sex,
      birthday: birthday
    };
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }

}
