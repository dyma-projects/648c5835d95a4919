import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  title: string = "Exercice 1";
  name: string =  "";

  reset(){
    this.name = "";
  }
}
