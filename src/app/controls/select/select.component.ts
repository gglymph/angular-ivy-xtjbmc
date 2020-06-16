import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'publiq-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fade', [

      transition(':enter', [
        style ({transform: 'translateY(-100%)'}),
        animate('250ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SelectComponent implements OnInit {

  @Input() items = [{value: 1, text: 'Option 1'},
                    {value: 2, text: 'Option 2'},
                    {value: 3, text: 'Option 3'},
                    {value: 4, text: 'Option 4'}];

  @Input() formGroup: FormGroup;
  @Input() controlName: any;
  showList = false;

  get formControlName() {
    return this.formGroup.get(this.controlName) as FormControl;
  }
  
  constructor() { }

  ngOnInit() {
  }

  click() {
    this.showList = true;
  }

  hideDropDown() {
    this.showList = false;
  }

}