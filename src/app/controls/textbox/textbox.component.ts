import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'publiq-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input() required = true;
  //@Input() formGroup: FormGroup;
  @Input() control: AbstractControl;
  @Input() inputType: string;

  get formGroup() {
    return this.control.parent as FormGroup;
  }

  get formControl() {
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit() {
    
  }

}