import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environment/envirnemet';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../model/Patient';
import {Observable} from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class PatientService {
  private readonly apiUrl = `${environment.apiURl}`;

  private http = inject(HttpClient);

  getPatients() : Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/add`, patient)
  }
}
