import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1:string=''
  value2:string=''
  result:number=0
  operator=''
  setValue(i){
    if(this.operator==''){
      this.value1=i
      console.log(this.value1)
    }else{
      this.value2=i
      if(this.operator=='+'){
        this.result=parseInt(this.value1)+parseInt(this.value2)
      }
      if(this.operator=='-'){
        this.result=parseInt(this.value1)-parseInt(this.value2)
      }
      
    }

  }
setOperator(opr){
  this.operator=opr
  console.log(this.operator)
  if(this.operator=='clr'){
    console.log("inside clear button")
    this.value1=""
    this.value2=""
    this.result=0
  }



}


  constructor() { }

  ngOnInit(): void {
  }

  test(event){
    console.log("test function called....")
    console.log(event)
  }


  add(){
    this.result=parseInt(this.value1)+parseInt(this.value2)
  
  }


}
