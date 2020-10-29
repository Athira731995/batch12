import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit {


  constructor(private http:HttpClient) {
    
   }

  selectedFile=null
  ngOnInit(): void {
  }
  onfileSelect(event){
this.selectedFile=<File>event.target.files[0];
  }
  upload(){

    const fd=new FormData()
    fd.append("image",this.selectedFile,this.selectedFile.name)
    this.http.post("https://jsonplaceholder.typicode.com/posts",fd).subscribe((res)=>{
      console.log("it worked...")

    })
  }

}
