import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    }]
})
export class InputFieldComponent implements ControlValueAccessor, OnInit {
  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      if (obj != this.value) {
        this.value = obj;
      }
    }
  }

  protected value: any;

  @Input() name: string;
  @Input() type: string;
  @Input() title: string = '';
  @Input() minValue;
  @Input() maxValue;

  constructor() {
  }

  ngOnInit() {
  }

}
