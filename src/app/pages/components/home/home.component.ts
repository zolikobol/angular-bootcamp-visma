import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    address1: new FormControl(null, [
      Validators.required,
      Validators.maxLength(200),
    ]),
    address2: new FormControl(null, [Validators.maxLength(200)]),
    state: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
      ),
    ]),
    email: new FormControl(null, [Validators.email]),
    age: new FormControl(18, [Validators.min(18), Validators.max(99)]),
  });

  constructor() {
    // this.form.get("name").disable();
  }

  ngOnInit() {}

  onFormSubmit(): void {
    console.log(this.form);
  }
}
