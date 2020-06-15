import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'publiq-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input() required = true;
  @Input() formGroup: FormGroup;
  @Input() controlName: any;
  @Input() inputType: string;

  get formControlName() {
    return this.formGroup.get(this.controlName) as FormControl;
  }

  constructor() { }

  ngOnInit() {
    
  }

}