import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'publiq-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  objectKeys = Object.keys;

  @Input() required = true;
  @Input() control: AbstractControl;
  @Input() inputType: string;
  @Input() errorMessages: any = {};


  get formControl() {
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit() {
    
  }

}