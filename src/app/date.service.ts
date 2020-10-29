import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { 
    console.log("service class constructor invoked.......")

  }

  getDate(){
    return new Date()

  }

}
