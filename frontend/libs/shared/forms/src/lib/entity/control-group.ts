import { ControlBase } from './control-base';
import { Control, createFormControl } from './control';
import { ControlValueTypes } from './control-types';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export  class ControlGroup<T> implements ControlBase<T>{
  isGroup = true;
  key: keyof T | undefined;
  label: string;
  options: { key: string; value: string }[];
  order: number;
  visible: boolean;
  controls: Control<ControlValueTypes, T>[] | undefined;

  constructor(options: {
    key?: keyof T;
    label?: string;
    order?: number;
    visible?: boolean;
    controls?: Control<ControlValueTypes, T>[];
    options? : { key: string, value: string }[];
  } ={}) {
    this.key = options.key;
    this.label = options.label || '';
    this.order = options.order ?? 1;
    this.controls = options.controls;
    this.visible = options.visible || false;
    this.options = options.options || [];
  }
}

export function createFormGroup<T>(group: ControlGroup<T>): AbstractControl {
  const controls : {[key : string] : any} = {};
  group.controls?.forEach((control: Control<ControlValueTypes, T>)=>{
    if(control.key){
      controls[control.key.toString()] = createFormControl<T>(control) as FormControl
    }
  })
  return new FormGroup(controls)
}
