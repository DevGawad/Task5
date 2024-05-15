import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.scss'
})
export class EvenComponent  implements OnDestroy {
  @Input() currentNumber : string=""
  ngOnDestroy(): void { 
  } 
}
