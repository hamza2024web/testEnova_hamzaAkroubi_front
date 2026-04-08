export interface Patient {
  id : string ,
  firstName : string,
  lastName : string,
  status : PatientStatus,
  numberPatient : number
}

export enum PatientStatus {
  ACTIVE ,
  SUSPENDED
}
