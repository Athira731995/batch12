import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

 product=new Product()

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.product)
  }


}
