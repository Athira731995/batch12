import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    name="Athira"
 num_arry=[10,30,40,50,60]
 states=["Kerala","Tamilnadu","Goa"]


  constructor(private date_service:DateService){
    console.log("Test component")
    console.log(this.date_service.getDate())
   
  }

  ngOnInit(): void {
  }
  mystyle={
    'color':'blue',
    'font-weight':'bold'
  }
condition='false'
}
