
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})

export class ColorPipe implements PipeTransform {

  transform(pValue: number): string {

     if (pValue < 5) {
      return "Red";
     } else {
      return "Green";
     }
     
    // <ng-template #thenRed>
    //  return "Red";
    // </ng-template>

    // <ng-template #thenGreen>
    //  return "Green";
    // </ng-template>


    // <ng-template [ngIf]="pValue < 5 [ngIfElse]="elseBlock">    
    //   <div>
    //    return "Red"
    //   </div>      
    // </ng-template>

    // <ng-template #elseBlock>
    //   <div>
    //     return "Green""
    //   </div>
    //  </ng-template>
    
  }
}
