import { Component,Input,EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [FormsModule,CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all : number = 0;

  @Input()
  inStock : number = 0;

  @Input()
  outOfStock : number = 0;

  @Output()  
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  onselectedFilterRadioButtonChange(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
