import { Component, VERSION } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  formGroupName = this.fb.group({
    textBox: [null, Validators.required],
    select:  [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  name = "Angular " + VERSION.major;
}
