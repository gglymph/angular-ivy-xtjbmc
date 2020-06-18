import { Component, VERSION, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  formGroupName = this.fb.group({
    textBox: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    select:  [null, Validators.required],
    numeric: [null, Validators.required],
    array: this.fb.array([]),
    array2: this.fb.array([])
  });

  get arr() {
    return this.formGroupName.get('array') as FormArray;
  }
  
  get arr2() {
    return this.formGroupName.get('array2') as FormArray;
  }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      const formGroup = this.fb.group({
        cntrl: [`First Control ${i}`, Validators.required],
        cntrl2: [`Second Control ${i}`, Validators.required]
      })
      this.arr2.push(formGroup);
      this.arr.push(this.fb.control(`Control ${i}`, Validators.required));
    }

    console.log(this.arr2);
  }

  constructor(private fb: FormBuilder) {}

  name = "Angular " + VERSION.major;
}
