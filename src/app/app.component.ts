import { Component } from '@angular/core';
import {faBell,faCalculator,faCocktail} from '@fortawesome/free-solid-svg-icons'
import {DateService} from './date.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bell=faBell;
  calc=faCalculator
  cocktail=faCocktail

  title = 'MyPro';

constructor(private date_service:DateService){
  console.log("App component")
  console.log(this.date_service.getDate())
 
}



}
