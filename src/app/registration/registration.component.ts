import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //  name=new FormControl("Athira")

  studentForm=new FormGroup({

    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl()

    })

  })


  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.studentForm)
    console.log(this.studentForm.value)

  }




}
