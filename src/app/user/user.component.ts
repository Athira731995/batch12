import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userlist:any;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.userservice.getUsers().subscribe((data)=>{
      this.userlist=data
      console.log(this.userlist)

    })

  }

}
