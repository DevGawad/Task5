import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent implements OnDestroy{
 
 @Output()  OnIncreament = new EventEmitter();

 
 intervalId:any;
 x:number=0;
 DoIncreament(){ 
  this.intervalId = setInterval(() =>{ 
   this.OnIncreament.emit(this.x++) 
 }, 1000);
  
 }

StopIncreament(){
  clearInterval(this.intervalId);
}

ngOnDestroy(): void {
    StopIncreament();
}


}
