import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  studentForm=this.fb.group({
    name:["",[Validators.required,Validators.minLength(2),Validators.maxLength(4)]],
    email:["",[Validators.required]],
    password:["",Validators.required],
    address:this.fb.group({
      city:["",Validators.required],
      state:["",Validators.required],
      pin:["",Validators.required]
    })
  })

  save(){
    console.log(this.studentForm.value)
  }
  onreset(){
    this.studentForm.reset()
  }
}
