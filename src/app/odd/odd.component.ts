import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.scss'
})
export class OddComponent  implements OnDestroy {
  @Input() currentNumber : string="";

  ngOnDestroy(): void { 
  }
  

}
