import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assign5';

  Numbers : number[]=[];

  
  Increament(number : number) :void{
    this.Numbers.push(number);
    console.log(this.Numbers);
  }
}
