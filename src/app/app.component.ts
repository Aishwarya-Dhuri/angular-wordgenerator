import { Component } from '@angular/core';
import arrayWords from "../utils/words";
import countryWords from "../utils/countries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  random = 10;
  countries = '';

  handleSlideChange(newLimit : number){
    this.limit = newLimit;
    this.random = Math.ceil(Math.random() * 249);
  }

  generate(){
    this.words = arrayWords.slice(0,this.limit).join(' ');
  }

  generateCountry(){
  this.countries =  countryWords.slice(0,this.random).join(',');
  }
 

}
