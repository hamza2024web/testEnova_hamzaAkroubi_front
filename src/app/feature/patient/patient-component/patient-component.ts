import {Component, inject, OnInit} from '@angular/core';
import {PatientService} from '../../../api/service/patientService';
import {Patient} from '../../../api/model/Patient';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-patient-component',
  imports: [],
  templateUrl: './patient-component.html',
  styleUrl: './patient-component.css',
})
export class PatientComponent implements OnInit {
  patientService = inject(PatientService);

  patients : Patient[] = [];

  fb = inject(FormBuilder);


  subscription !: Subscription;
  ngOnInit() {
    this.loadPatients();
  }

  patientForm : FormGroup = this.fb.group({
    firstName : ['', Validators.required],
    lastName : ['' , Validators.required],
    numberPatient : ['' , Validators.required]
  })
  loadPatients() {
    this.patientService.getPatients().subscribe({
      next : (response) => {
        this.patients = response
      },
      error : () => {
        console.log("Erreur");
      }
    });
  }


  addPatient() {
    if (this.patientForm.valid) {
      this.patientService.addPatient(this.patientForm.value).subscribe({
        next : () => {
          console.log("Patient addded Succefully");
        },
        error : () => {
          console.log("Erreur");
        }
      })
    }
  }

  ngOnDestroy () {
    this.subscription.unsubscribe;
  }


}
