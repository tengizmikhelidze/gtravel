import { ControlTypes, ControlValueTypes, PatterTypes } from './control-types';
import { ControlBase } from './control-base';
import { regexTemplate, regexTitle } from './regex';
import { FormControl, Validators } from '@angular/forms';

export class Control<valueType extends ControlValueTypes, T> implements ControlBase<T>{
  isGroup = false;
  value?:  valueType;
  key: (keyof T) | undefined;
  label: string;
  required: boolean;
  controlType: ControlTypes;
  type: string;
  visible = true;
  disabled = false;
  options: { key: string, value: string }[];
  pattern: { reg: RegExp, title: string } | null;
  maxLength: number;
  minLength: number;
  order: number;
  hideBorder: {top: boolean, right: boolean, left: boolean, bottom: boolean};
  constructor(options: {
    value?: valueType;
    key?: (keyof T) | undefined;
    label?: string;
    required? : boolean;
    order?: number;
    controlType?: ControlTypes;
    type?: string;
    visible?: boolean;
    disabled?: boolean;
    options?: { key: string, value: string }[];
    pattern?: PatterTypes;
    maxLength?: number;
    minLength?: number;
    hideBorder?: {top? : boolean, right?: boolean, left?: boolean, bottom?: boolean};
  } = {}) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order ?? 1;
    this.controlType = options.controlType;
    this.type = options.type || '';
    this.visible = options.visible ?? this.visible;
    this.disabled = options.disabled ?? this.disabled;
    this.maxLength = options.maxLength || 524287;
    this.minLength = options.minLength || 0;
    this.options = options.options || [];
    this.pattern =  options.pattern? {reg: regexTemplate[options.pattern], title: regexTitle[options.pattern]}: null;
    this.hideBorder = options.hideBorder ?
      {top: false, right: false, left: false, bottom: false, ...options.hideBorder} :
      {top: false, right: false, left: false, bottom: false};
  }
}

export function createFormControl<T>(control: Control<ControlValueTypes, T>): FormControl{
  const tempFormControl: FormControl = new FormControl(control.value);
  if(control.required && control.pattern){
    tempFormControl.setValidators([Validators.required, Validators.pattern(control.pattern.reg)])
  } else if (control.required){
    tempFormControl.setValidators([Validators.required]);
  } else if (control.pattern){
    tempFormControl.setValidators([Validators.pattern(control.pattern.reg)])
  }
  return tempFormControl;
}
