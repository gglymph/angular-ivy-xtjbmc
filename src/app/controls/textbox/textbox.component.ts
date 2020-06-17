import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'publiq-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input() required = true;
  @Input() control: AbstractControl;
  @Input() inputType: string;
  @Input() seed: number;
  @Input() maxLength: number;
  @Input() step: number;
  @Input() maxNumber: number;
  @Input() minNumber: number;


  get formControl() {
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit() {
    
  }

}