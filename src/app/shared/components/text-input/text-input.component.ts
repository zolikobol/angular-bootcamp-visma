import {
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string | undefined;
  value: any;
  isDisabled = false;
  hasErrors = false;
  ngControl: NgControl;

  constructor(private injector: Injector) {}

  onChange = (rating: number) => {
    this.hasErrors = this.ngControl.valid;
  };

  onTouch = (value: any) => {};

  writeValue(value: any): void {
    this.value = value;
    // throw new Error("Method not implemented.");
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;

    // throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }
}
